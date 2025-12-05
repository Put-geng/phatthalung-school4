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
