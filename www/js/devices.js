/* =====================================
   DevDrop
   devices.js
   Web Bluetooth Edition
===================================== */

const statusText = document.getElementById("bt-text");
const deviceList = document.getElementById("device-list");

/* ==========================
   Bluetooth初期化
========================== */

async function initBluetooth(){

    try{

        const supported =
            await bluetoothAPI.isSupported();

        if(!supported){

            statusText.textContent =
                "Web Bluetooth Unsupported";

            return;

        }

        statusText.textContent =
            "Bluetooth Ready";

    }

    catch(e){

        console.error(e);

        statusText.textContent =
            "Bluetooth Error";

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

        const devices =
            await bluetoothAPI.scan();

        renderDevices(devices);

    }

    catch(e){

        console.error(e);

        deviceList.innerHTML = `
            <div class="loading">

                Scan Error

                <br><br>

                ${e.message}

            </div>
        `;

    }

}

/* ==========================
   Device一覧
========================== */

function renderDevices(devices){

    deviceList.innerHTML = "";

    if(!devices || devices.length===0){

        deviceList.innerHTML = `
            <div class="loading">

                Deviceが見つかりません

            </div>
        `;

        return;

    }

    devices.forEach(device=>{

        const card =
            document.createElement("div");

        card.className =
            "device-item";

        card.innerHTML = `

            <div class="device-name">

                📱 ${device.name}

            </div>

            <div class="device-address">

                ${device.id}

            </div>

            <div class="device-status">

                ⚪ Ready

            </div>

            <button class="connect-btn">

                Connect

            </button>

        `;

        card.querySelector(".connect-btn")
        .addEventListener("click",()=>{

            connectDevice(device);

        });

        deviceList.appendChild(card);

    });

}

/* ==========================
   Connect
========================== */

async function connectDevice(device){

    showLoadingDialog("Connecting...");

    try{

        const connected =
            await bluetoothAPI.connect(
                device.device
            );

        if(!connected){

            throw new Error(
                "Connect Failed"
            );

        }

        const services =
            await bluetoothAPI.getServices();

        console.log(
            "Services",
            services
        );

        sessionStorage.setItem(

            "services",

            JSON.stringify(

                services.map(service=>({

                    uuid:service.uuid

                }))

            )

        );

        hideLoadingDialog();

        window.location.href =
            "service.html";

    }

    catch(e){

        hideLoadingDialog();

        console.error(e);

        alert(

            "接続できませんでした\n\n"+

            e.message

        );

    }

}

/* ==========================
   Buttons
========================== */

document
.getElementById("scan-btn")
.addEventListener(

    "click",

    scanDevices

);

document
.getElementById("back-btn")
.addEventListener(

    "click",

    ()=>{

        window.location.href =
        "index.html";

    }

);

/* ==========================
   Start
========================== */

initBluetooth();
