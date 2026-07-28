/* =====================================
   DevDrop
   devices.js
===================================== */

const statusText = document.getElementById("bt-text");
const deviceList = document.getElementById("device-list");

/* ==========================
   初期化
========================== */

async function initBluetooth(){

    const permission =
        await bluetoothPermissionAPI.hasPermission();

    if(!permission){

        await bluetoothPermissionAPI.request();

    }

    const enabled =
        await bluetoothAPI.isEnabled();

    if(enabled){

        statusText.textContent="Bluetooth ON";

    }else{

        statusText.textContent="Bluetooth OFF";

    }

}
/* ==========================
   Bluetooth状態確認
========================== */

async function initBluetooth(){

    try{

        const enabled = await bluetoothAPI.isEnabled();

        if(enabled){

            statusText.textContent = "Bluetooth ON";

        }else{

            statusText.textContent = "Bluetooth OFF";

        }

    }catch(e){

        console.error(e);

        statusText.textContent = "Bluetooth Error";

    }

}

/* ==========================
   Scan
========================== */

async function scanDevices(){

    deviceList.innerHTML = `
        <div class="loading">

            🔍 Scanning...

        </div>
    `;

    try{

        const devices = await bluetoothAPI.scan();

        renderDevices(devices);

    }catch(e){

        console.error(e);

        deviceList.innerHTML = `
            <div class="loading">

                Scan Error

            </div>
        `;

    }

}

/* ==========================
   一覧表示
========================== */

function renderDevices(devices){

    deviceList.innerHTML = "";

    if(devices.length === 0){

        deviceList.innerHTML = `
            <div class="loading">

                Deviceが見つかりません

            </div>
        `;

        return;

    }

    devices.forEach(device => {

        const card = document.createElement("div");

        card.className = "device-item";

        card.innerHTML = `

            <div class="device-name">

                📱 ${device.name}

            </div>

            <div class="device-address">

                ${device.address}

            </div>

            <div class="device-status">

                ${device.connected ? "🟢 Connected" : "⚪ Ready"}

            </div>

            <button class="connect-btn">

                Connect

            </button>

        `;

        card.querySelector(".connect-btn").onclick = () => {

            showConnectDialog(device);

        };

        deviceList.appendChild(card);

    });

}

/* ==========================
   Buttons
========================== */

document.getElementById("scan-btn").addEventListener("click", scanDevices);

document.getElementById("back-btn").addEventListener("click", () => {

    window.location.href = "index.html";

});
