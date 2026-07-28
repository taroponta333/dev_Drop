/* =====================================
   DevDrop
   Home
===================================== */

document.addEventListener("DOMContentLoaded",()=>{

    /* ==========================
       Send
    ========================== */

    document
        .getElementById("send-btn")
        .addEventListener("click",()=>{

            window.location.href="send.html";

        });

    /* ==========================
       Receive
    ========================== */

    document
        .getElementById("receive-btn")
        .addEventListener("click",()=>{

            window.location.href="receive.html";

        });

    /* ==========================
       Devices
    ========================== */

    document
        .getElementById("devices-btn")
        .addEventListener("click",()=>{

            window.location.href="devices.html";

        });

    /* ==========================
       Settings
    ========================== */

    document
        .getElementById("settings-btn")
        .addEventListener("click",()=>{

            alert("Settings v0.2");

        });

});
