/* =====================================
   DevDrop
   characteristics.js
===================================== */

const serviceName =
document.getElementById("service-name");

const serviceUUID =
document.getElementById("service-uuid");

const characteristicList =
document.getElementById("characteristic-list");

/* ==========================
   Load
========================== */

async function loadCharacteristics(){

    try{

        const serviceData =
        JSON.parse(

            sessionStorage.getItem(
                "selectedService"
            )

        );

        if(!serviceData){

            throw new Error(
                "Service Not Selected"
            );

        }

        serviceName.textContent =
            "Bluetooth Service";

        serviceUUID.textContent =
            serviceData.uuid;

        const service =
            bluetoothAPI.services.find(

                s=>s.uuid===serviceData.uuid

            );

        if(!service){

            throw new Error(
                "Service Not Found"
            );

        }

        const characteristics =
            await bluetoothAPI.getCharacteristics(
                service
            );

        renderCharacteristics(
            characteristics
        );

    }

    catch(e){

        console.error(e);

        characteristicList.innerHTML = `
            <div class="loading">

                Characteristic Error

                <br><br>

                ${e.message}

            </div>
        `;

    }

}

/* ==========================
   Render
========================== */

function renderCharacteristics(
    characteristics
){

    characteristicList.innerHTML = "";

    if(characteristics.length===0){

        characteristicList.innerHTML = `
            <div class="loading">

                Characteristicなし

            </div>
        `;

        return;

    }

    characteristics.forEach(characteristic=>{

        const props =
            characteristic.properties;

        const card =
        document.createElement("div");

        card.className =
            "characteristic-item";

        card.innerHTML = `

            <div class="characteristic-name">

                Characteristic

            </div>

            <div class="characteristic-uuid">

                ${characteristic.uuid}

            </div>

            <div class="characteristic-properties">

                ${props.read ?
                    '<span class="property read">Read</span>' : ''}

                ${props.write ?
                    '<span class="property write">Write</span>' : ''}

                ${props.writeWithoutResponse ?
                    '<span class="property write">Write NR</span>' : ''}

                ${props.notify ?
                    '<span class="property notify">Notify</span>' : ''}

                ${props.indicate ?
                    '<span class="property indicate">Indicate</span>' : ''}

            </div>

        `;

        card.addEventListener(

            "click",

            ()=>{

                openCharacteristic(
                    characteristic
                );

            }

        );

        characteristicList.appendChild(
            card
        );

    });

}

/* ==========================
   Open
========================== */

function openCharacteristic(
    characteristic
){

    bluetoothAPI.selectedCharacteristic =
        characteristic;

    window.location.href =
        "readwrite.html";

}

/* ==========================
   Back
========================== */

document
.getElementById("back-btn")
.addEventListener(

    "click",

    ()=>{

        window.location.href =
            "service.html";

    }

);

/* ==========================
   Start
========================== */

loadCharacteristics();
