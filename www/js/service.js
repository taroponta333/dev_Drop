/* =====================================
   DevDrop
   service.js
===================================== */

const serviceList =
document.getElementById("service-list");

/* ==========================
   Load Services
========================== */

function loadServices(){

    const data =
    sessionStorage.getItem("services");

    if(!data){

        serviceList.innerHTML = `
            <div class="loading">

                No Services

            </div>
        `;

        return;

    }

    const services =
    JSON.parse(data);

    renderServices(services);

}

/* ==========================
   Render
========================== */

function renderServices(services){

    serviceList.innerHTML = "";

    if(services.length===0){

        serviceList.innerHTML = `
            <div class="loading">

                Serviceがありません

            </div>
        `;

        return;

    }

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

        card.addEventListener("click",()=>{

            openService(service);

        });

        serviceList.appendChild(card);

    });

}

/* ==========================
   Open Service
========================== */

function openService(service){

    sessionStorage.setItem(

        "selectedService",

        JSON.stringify(service)

    );

    window.location.href =
    "characteristics.html";

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
        "devices.html";

    }

);

/* ==========================
   Start
========================== */

loadServices();
