/* ======================================
   DevDrop v0.1
   discovery.js
====================================== */

async function openDevices() {

    console.log("Open Devices");

    const devices = await networkAPI.scan();

    showDeviceDialog(devices);

}

/* ==============================
   Device Dialog
============================== */

function showDeviceDialog(devices) {

    // 背景
    const overlay = document.createElement("div");
    overlay.className = "device-overlay";

    // ダイアログ
    const dialog = document.createElement("div");
    dialog.className = "device-dialog";

    dialog.innerHTML = `
        <h2>Devices</h2>

        <div id="device-list"></div>

        <button id="scan-btn">🔄 Scan</button>
        <button id="close-btn">Close</button>
    `;

    overlay.appendChild(dialog);
    document.body.appendChild(overlay);

    const list = dialog.querySelector("#device-list");

    renderDevices(list, devices);

    // Scan
    dialog.querySelector("#scan-btn").onclick = async () => {

        list.innerHTML = "<p>Scanning...</p>";

        const result = await networkAPI.scan();

        renderDevices(list, result);

    };

    // Close
    dialog.querySelector("#close-btn").onclick = () => {

        overlay.remove();

    };

}

/* ==============================
   Device List
============================== */

function renderDevices(container, devices) {

    container.innerHTML = "";

    if (!devices.length) {

        container.innerHTML = `
            <p>No devices found.</p>
        `;

        return;

    }

    devices.forEach(device => {

        const item = document.createElement("div");

        item.className = "device-item";

        item.innerHTML = `
            <strong>${device.name}</strong><br>
            <small>${device.ip}</small>
        `;

        item.onclick = () => {

            console.log("Selected", device);

            alert(
                "選択:\n" +
                device.name +
                "\n" +
                device.ip
            );

        };

        container.appendChild(item);

    });

}
