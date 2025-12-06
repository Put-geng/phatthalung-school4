import { db } from "./firebase.js";
import {
  doc, getDoc, updateDoc, setDoc, deleteField,
  collection, query, where, getDocs, deleteDoc
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const ROOM_STATUS_COLLECTION = "room-manual-status";

export async function getRoomStatus(roomId) {
    const docRef = doc(db, ROOM_STATUS_COLLECTION, roomId);
    const docSnap = await getDoc(docRef);

    if (!docSnap.exists()) {
        return null; // ไม่มีสถานะ Manual
    }

    const data = docSnap.data();
    
    // ตรวจสอบเวลาหมดอายุ (Cleanup Logic)
    const untilTime = data.untilTime; // รูปแบบ HH:MM
    const [h, m] = untilTime.split(':').map(Number);
    
    const now = new Date();
    // สร้างวัตถุ Date สำหรับเวลาหมดอายุในวันนี้
    const expireTime = new Date(now.getFullYear(), now.getMonth(), now.getDate(), h, m, 0);

    // ถ้าหมดเวลาแล้ว ให้ลบข้อมูล Manual และคืนค่าเป็น null
    if (expireTime.getTime() <= now.getTime()) {
        await deleteDoc(docRef);
        return null;
    }

    return data;
}


// ✔ อ่านสถานะห้อง + เช็กหมดเวลา manual (เสถียรขึ้น)
export async function getAllManualStatuses() {
    try {
        const manualStatusRef = collection(db, ROOM_STATUS_COLLECTION);
        const snapshot = await getDocs(manualStatusRef); // ดึงข้อมูลทั้งหมดใน Collection

        const manualStatuses = {};
        const now = new Date();

        // ใช้อาเรย์เพื่อเก็บ promise ในการลบเอกสารที่หมดอายุ
        const cleanupPromises = []; 

        snapshot.forEach((docSnap) => {
            const data = docSnap.data();
            const roomId = docSnap.id; 
            
            const [h, m] = data.untilTime.split(":").map(Number);
            const expireTime = new Date(now.getFullYear(), now.getMonth(), now.getDate(), h, m, 0);

            if (now < expireTime) {
                // ถ้ายังไม่หมดเวลา → เก็บไว้
                manualStatuses[roomId] = {
                    mode: "manual",
                    status: data.status,
                    untilTime: data.untilTime
                };
            } else {
                // ถ้าหมดเวลาแล้ว → เก็บ promise เพื่อลบออกทีหลัง
                const docRef = doc(db, ROOM_STATUS_COLLECTION, roomId);
                cleanupPromises.push(deleteDoc(docRef));
            }
        });

        // รอให้การลบเอกสารที่หมดอายุเสร็จสิ้นทั้งหมด
        await Promise.all(cleanupPromises);
        
        return manualStatuses; 
    } catch (err) {
        console.error("getAllManualStatuses ERROR:", err);
        return {}; // คืนค่าว่างถ้ามีปัญหา
    }
}


// ในไฟล์ CodeJS/room-manager.js

export async function setRoomManualStatus(roomId, status, untilTime) {
    console.log("Attempting to set manual status for:", roomId);
    const docRef = doc(db, ROOM_STATUS_COLLECTION, roomId);
    
    try { // <-- เริ่ม try
        await setDoc(docRef, {
            status: status,
            mode: "manual",
            untilTime: untilTime,
            setAt: new Date()
        });
        console.log("Set manual status successful.");
    } catch (error) { // <-- ดักจับ error
        console.error("❌ FIREBASE WRITE FAILED:", error); // <-- แสดง error ชัดๆ
        throw error; // ส่ง error กลับไปให้ select-room-logic.js จัดการ
    } // <-- สิ้นสุด try...catch
}


export async function clearRoomManualStatus(roomId) {
    const docRef = doc(db, ROOM_STATUS_COLLECTION, roomId);
    await deleteDoc(docRef);
}



// ✔ ตั้งสถานะ manual จากหัวหน้าห้อง
export async function setRoomManual(roomId, status, untilTime) {
  try {
    await setDoc(doc(db, "rooms", roomId), {
      roomId,
      status,
      untilTime,
      mode: "manual",
      updatedAt: new Date()
    });
  } catch (err) {
    console.error("setRoomManual ERROR:", err);
  }
}



// ✔ รีเซตกลับ auto
export async function resetRoomToAuto(roomId) {
  try {
    const ref = doc(db, "rooms", roomId);
    await updateDoc(ref, {
      mode: "auto",
      status: deleteField(),
      untilTime: deleteField(),
      updatedAt: new Date()
    });
  } catch (err) {
    console.error("resetRoomToAuto ERROR:", err);
  }
}




/*
import { db } from "./firebase.js";
import {
  doc, getDoc, updateDoc, setDoc, deleteField
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";


// ✔ อ่านสถานะห้อง + เช็กหมดเวลา manual
// อ่านสถานะห้องแบบไม่ให้ UI พัง
export async function getRoomStatus(roomId) {
  try {
    const ref = doc(db, "rooms", roomId);
    const snap = await getDoc(ref);

    // ไม่มีเอกสาร → auto
    if (!snap.exists()) {
      return { mode: "auto" };
    }

    const data = snap.data();

    // ถ้า mode ไม่ใช่ manual → auto
    if (data.mode !== "manual") {
      return { mode: "auto" };
    }

    // เช็กเวลา manual ว่าหมดหรือยัง
    const now = new Date();
    const [hh, mm] = data.untilTime.split(":").map(Number);
    const expire = new Date();
    expire.setHours(hh, mm, 0, 0);

    if (now > expire) {
      // หมดเวลา → reset
      await updateDoc(ref, {
        mode: "auto",
        status: deleteField(),
        untilTime: deleteField(),
      });

      return { mode: "auto" };
    }

    // ยังอยู่ในโหมด manual
    return {
      mode: "manual",
      status: data.status,
      untilTime: data.untilTime
    };

  } catch (err) {
    console.error("getRoomStatus ERROR:", err);
    
    // ถ้า error → ไม่ควรทำให้ UI พัง → คืน auto
    return { mode: "auto" };
  }
}



// ✔ หัวหน้าห้องอัปเดตสถานะ
export async function setRoomManual(roomId, status, untilTime) {
  await setDoc(doc(db, "rooms", roomId), {
    roomId,
    status,
    untilTime,
    mode: "manual",
    updatedAt: new Date()
  });
}


// ✔ รีเซตกลับเป็นโหมดอัตโนมัติทันที
export async function resetRoomToAuto(roomId) {
  const ref = doc(db, "rooms", roomId);
  await updateDoc(ref, {
    mode: "auto",
    status: deleteField(),
    untilTime: deleteField(),
    updatedAt: new Date()
  });
}
*/