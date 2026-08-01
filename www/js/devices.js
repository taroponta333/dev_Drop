/* =====================================
   DevDrop
   devices.js (SPA Edition)
===================================== */

const statusText =
document.getElementById("bt-text");

const pageTitle =
document.getElementById("page-title");

const deviceScreen =
document.getElementById("device-screen");

const serviceScreen =
document.getElementById("service-screen");

const characteristicScreen =
document.getElementById("characteristic-screen");

const deviceList =
document.getElementById("device-list");

const serviceList =
document.getElementById("service-list");

const characteristicList =
document.getElementById("characteristic-list");

const serviceName =
document.getElementById("service-name");

const serviceUUID =
document.getElementById("service-uuid");

let currentScreen = "device";

let currentServices = [];

let currentService = null;

/* ==========================
   Screen
========================== */

function showDeviceScreen(){

    currentScreen = "device";

    pageTitle.textContent =
        "Bluetooth Devices";

    deviceScreen.style.display = "block";
    serviceScreen.style.display = "none";
    characteristicScreen.style.display = "none";

}

function showServiceScreen(){

    currentScreen = "service";

    pageTitle.textContent =
        "Bluetooth Services";

    deviceScreen.style.display = "none";
    serviceScreen.style.display = "block";
    characteristicScreen.style.display = "none";

}

function showCharacteristicScreen(){

    currentScreen = "characteristic";

    pageTitle.textContent =
        "Characteristics";

    deviceScreen.style.display = "none";
    serviceScreen.style.display = "none";
    characteristicScreen.style.display = "block";

}

/* ==========================
   Back
========================== */

document
.getElementById("back-btn")
.onclick = () => {

    if(currentScreen==="characteristic"){

        showServiceScreen();

        return;

    }

    if(currentScreen==="service"){

        showDeviceScreen();

        return;

    }

    history.back();

};

/* ==========================
   Bluetooth Init
========================== */

async function initBluetooth(){

    try{

        const enabled =
            await bluetoothAPI.isSupported();

        statusText.textContent =
            enabled
            ? "Bluetooth Ready"
            : "Bluetooth Unsupported";

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

            </div>
        `;

    }

}

/* ==========================
   Devices
========================== */

function renderDevices(devices){

    deviceList.innerHTML = "";

    if(devices.length===0){

        deviceList.innerHTML = `
            <div class="loading">

                Deviceがありません

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

                ${device.address}

            </div>

            <button class="connect-btn">

                Connect

            </button>

        `;

        card
        .querySelector(".connect-btn")
        .onclick = ()=>{

            connectDevice(device);

        };

        deviceList.appendChild(card);

    });

}

/* ==========================
   Connect
========================== */

async function connectDevice(device){

    try{

        await bluetoothAPI.connect(
            device.device
        );

        currentServices =
            await bluetoothAPI.getServices();

        renderServices(
            currentServices
        );

        showServiceScreen();

    }

    catch(e){

        console.error(e);

        alert(
            "接続できませんでした\n\n"+
            e.message
        );

    }

}

/* ==========================
   Services
========================== */

function renderServices(services){

    serviceList.innerHTML = "";

    services.forEach(service=>{

        const card =
        document.createElement("div");

        card.className =
            "service-item";

        card.innerHTML = `

            <div class="service-name">

                Bluetooth Service

            </div>

            <div class="service-uuid">

                ${service.uuid}

            </div>

            <div class="service-status">

                🟢 Ready

            </div>

        `;

        card.onclick = ()=>{

            openService(service);

        };

        serviceList.appendChild(card);

    });

}

/* ==========================
   Service Open
========================== */

async function openService(service){

    currentService = service;

    serviceName.textContent =
        "Bluetooth Service";

    serviceUUID.textContent =
        service.uuid;

    const chars =
        await bluetoothAPI
        .getCharacteristics(
            service.service
        );

    renderCharacteristics(chars);

    showCharacteristicScreen();

}

/* ==========================
   Characteristics
========================== */

function renderCharacteristics(chars){

    characteristicList.innerHTML = "";

    chars.forEach(c=>{

        const p =
            c.properties;

        const card =
        document.createElement("div");

        card.className =
            "characteristic-item";

        card.innerHTML = `

            <div class="characteristic-name">

                Characteristic

            </div>

            <div class="characteristic-uuid">

                ${c.uuid}

            </div>

            <div class="characteristic-properties">

                ${p.read ?
                    '<span class="property read">Read</span>' : ''}

                ${p.write ?
                    '<span class="property write">Write</span>' : ''}

                ${p.writeWithoutResponse ?
                    '<span class="property write">Write NR</span>' : ''}

                ${p.notify ?
                    '<span class="property notify">Notify</span>' : ''}

                ${p.indicate ?
                    '<span class="property indicate">Indicate</span>' : ''}

            </div>

        `;

        card.onclick = async ()=>{

    try{

        const value =
            await bluetoothAPI.readCharacteristic(c);

        showReadDialog(c,value);

    }

    catch(e){

        console.error(e);

        alert(

            "Read Error\n\n"+

            e.message

        );

    }

};
        characteristicList.appendChild(card);

    });

}

/* ==========================
   Read Dialog
========================== */

function showReadDialog(

    characteristic,

    value

){

    let text = "";

    try{

        text =
        bluetoothAPI.decodeValue(value);

    }

    catch(e){

        text = "";

    }

    if(text===""){

        try{

            text =
            bluetoothAPI.readUint8(value)
            .toString();

        }

        catch(e){

            text = "Binary Data";

        }

    }

    alert(

`Characteristic

UUID
${characteristic.uuid}

Value
${text}`

    );

}

/* ==========================
   Events
========================== */

document
.getElementById("scan-btn")
.onclick = scanDevices;

/* ==========================
   Start
========================== */

initBluetooth();

showDeviceScreen();
