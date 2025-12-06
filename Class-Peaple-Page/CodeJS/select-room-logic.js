import { auth } from "./firebase.js";
import { onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { buildings } from "./building-data.js";
import { setRoomManualStatus, clearRoomManualStatus, getRoomStatus } from "./room-manager.js"; // 🚨 ต้องสร้างฟังก์ชันเหล่านี้ใน room-manager.js

// ----------------------------------------------------
// A. ฟังก์ชันแจ้งเตือน (นำมาจาก check-class.html)
// ----------------------------------------------------

function showAlert(message, type="success", redirecURL=null) {
    const alertBox = document.getElementById('alertBox');
    const alertMessage = document.getElementById('alertMessage');
    const alertBtn = document.getElementById('alertOkBtn');
    const alertIcon = alertBox.querySelector('.alert-icon');
    
    alertMessage.textContent = message;
    
    if (type === "error") {
        alertIcon.src = "https://cdn-icons-png.flaticon.com/512/1828/1828843.png";
        alertBox.className = "custom-alert show error";
    } else {
        alertIcon.src = "https://cdn-icons-png.flaticon.com/512/845/845646.png";
        alertBox.className = "custom-alert show";
    }
    
    alertBtn.onclick = () => {
        alertBox.classList.remove('show');
        if (redirecURL) {
            window.location.href = redirecURL;
        }
    }
}

// ----------------------------------------------------
// B. Authentication & Redirection
// ----------------------------------------------------

// ตรวจสอบสถานะการล็อกอิน
onAuthStateChanged(auth, (user) => {
    if (user) {
        document.getElementById('currentUserEmail').textContent = user.email;
    } else {
        // ถ้าไม่ได้ล็อกอิน ให้กลับไปหน้าล็อกอิน
        location.href = "leader-password.html";
    }
});

// การออกจากระบบ
document.getElementById('logoutBtn').addEventListener('click', async () => {
    try {
        await signOut(auth);
        showAlert("ออกจากระบบสำเร็จ", "success", "leader-password.html");
    } catch (error) {
        showAlert("เกิดข้อผิดพลาดในการออกจากระบบ", "error");
    }
});


// ----------------------------------------------------
// C. จัดการ Dropdown และการแสดงผล
// ----------------------------------------------------

const buildingSelect = document.getElementById('buildingSelect');
const roomSelect = document.getElementById('roomSelect');
const periodSelect = document.getElementById('periodSelect');

// 1. สร้างตัวเลือกอาคาร
function populateBuildingSelect() {
    let html = '<option value="" disabled selected>-- กรุณาเลือกอาคาร --</option>';
    for (const [key, value] of Object.entries(buildings)) {
        // key คือ building-1, building-2, ...
        const buildingName = key.charAt(0).toUpperCase() + key.slice(1).replace('-', ' ');
        html += `<option value="${key}">${buildingName}</option>`;
    }
    buildingSelect.innerHTML = html;
}

// 2. เมื่อเลือกอาคาร ให้แสดงห้อง
buildingSelect.addEventListener('change', () => {
    const selectedBuildingId = buildingSelect.value;
    roomSelect.innerHTML = '<option value="" disabled selected>-- กรุณาเลือกห้อง --</option>';
    roomSelect.disabled = true;

    if (selectedBuildingId) {
        const rooms = buildings[selectedBuildingId];
        let html = '<option value="" disabled selected>-- กรุณาเลือกห้อง --</option>';
        for (const roomName of Object.keys(rooms)) {
            // เราใช้ชื่อห้องที่ไม่มีช่องว่างเป็น ID ใน Firebase
            const roomId = roomName.replace(/[\s\/-]/g, ''); 
            html += `<option value="${roomId}" data-room-name="${roomName}">${roomName}</option>`;
        }
        roomSelect.innerHTML = html;
        roomSelect.disabled = false;
        
        // ล้างสถานะปัจจุบันเมื่อเปลี่ยนอาคาร
        clearStatusDisplay();
    }
});

// 3. เมื่อเลือกห้อง ให้แสดงสถานะ Manual/Auto ปัจจุบัน
roomSelect.addEventListener('change', async () => {
    const roomId = roomSelect.value;
    if (roomId) {
        await updateCurrentStatusDisplay(roomId);
    }
});

// 4. แสดงสถานะปัจจุบันของห้องที่เลือก
async function updateCurrentStatusDisplay(roomId) {
    const roomName = roomSelect.options[roomSelect.selectedIndex].getAttribute('data-room-name');
    const manualStatus = await getRoomStatus(roomId);

    document.getElementById('displayRoomName').textContent = roomName || '--';
    
    if (manualStatus && manualStatus.mode === 'manual') {
        document.getElementById('displayStatus').textContent = manualStatus.status;
        document.getElementById('displayMode').textContent = "Manual";
        document.getElementById('displayUntil').textContent = manualStatus.untilTime;
    } else {
        document.getElementById('displayStatus').textContent = "-- (ตามตาราง)";
        document.getElementById('displayMode').textContent = "Auto";
        document.getElementById('displayUntil').textContent = "--";
    }
}

function clearStatusDisplay() {
    document.getElementById('displayRoomName').textContent = '--';
    document.getElementById('displayStatus').textContent = '--';
    document.getElementById('displayMode').textContent = 'Auto';
    document.getElementById('displayUntil').textContent = '--';
}


// ----------------------------------------------------
// D. จัดการปุ่มตั้งค่าและยกเลิก
// ----------------------------------------------------

document.getElementById('setManualBtn').addEventListener('click', async () => {
    const roomId = roomSelect.value;
    const roomName = roomSelect.options[roomSelect.selectedIndex]?.getAttribute('data-room-name');
    const status = document.querySelector('input[name="roomStatus"]:checked').value;

    const untilTime = periodSelect.value;

    if (!roomId) {
        return showAlert("กรุณาเลือกห้องที่ต้องการตั้งค่า", "error");
    }
    if (!untilTime) {
        return showAlert("กรุณากำหนดเวลาสิ้นสุด Manual", "error");
    }

    try {
        await setRoomManualStatus(roomId, status, untilTime);
        showAlert(`ตั้งค่าห้อง ${roomName} เป็น: ${status} จนถึงสิ้นสุดคาบ (เวลา ${untilTime}) สำเร็จ!`, "success");
        await updateCurrentStatusDisplay(roomId);
    } catch (e) {
        showAlert(`ตั้งค่าไม่สำเร็จ: ${e.message}`, "error");
    }
});

document.getElementById('clearManualBtn').addEventListener('click', async () => {
    const roomId = roomSelect.value;
    const roomName = roomSelect.options[roomSelect.selectedIndex]?.getAttribute('data-room-name');

    if (!roomId) {
        return showAlert("กรุณาเลือกห้องที่ต้องการยกเลิก", "error");
    }

    try {
        await clearRoomManualStatus(roomId);
        showAlert(`ยกเลิกสถานะ Manual ของห้อง ${roomName} แล้ว กลับสู่โหมด Auto`, "success");
        await updateCurrentStatusDisplay(roomId);
    } catch (e) {
        showAlert(`ยกเลิกไม่สำเร็จ: ${e.message}`, "error");
    }
});


// ----------------------------------------------------
// E. Initial Load
// ----------------------------------------------------

window.addEventListener('DOMContentLoaded', () => {
    populateBuildingSelect();
});