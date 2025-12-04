import { db } from "./firebase.js";
import {
  doc, getDoc, updateDoc, setDoc, deleteField
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";


// ✔ อ่านสถานะห้อง + เช็กหมดเวลา manual
export async function getRoomStatus(roomId) {
  const ref = doc(db, "rooms", roomId);
  const snap = await getDoc(ref);

  if (!snap.exists()) return { mode: "auto" };

  const data = snap.data();

  if (data.mode !== "manual") return { mode: "auto" };

  // เวลา manual หมดหรือยัง?
  const now = new Date();

  const [hh, mm] = data.untilTime.split(":").map(Number);
  const expire = new Date();
  expire.setHours(hh, mm, 0, 0);

  if (now > expire) {
    // reset → auto
    await updateDoc(ref, {
      mode: "auto",
      status: deleteField(),
      untilTime: deleteField()
    });

    return { mode: "auto" };
  }

  return data;
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
