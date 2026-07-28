/* =====================================
   DevDrop
   Network API v0.1
===================================== */

const networkAPI = {

    /* ==========================
       Device Scan
    ========================== */

    async scan() {

        console.log("Network Scan");

        // 仮想デバイス
        return [

            {
                id: "devbox-pc",
                name: "Chromebook",
                ip: "192.168.1.10",
                status: "online"
            },

            {
                id: "nothing-phone",
                name: "Nothing Phone",
                ip: "192.168.1.20",
                status: "online"
            },

            {
                id: "windows",
                name: "Windows PC",
                ip: "192.168.1.30",
                status: "offline"
            }

        ];

    },

    /* ==========================
       Connect
    ========================== */

    async connect(device){

        console.log("Connect", device);

        return true;

    },

    /* ==========================
       Disconnect
    ========================== */

    async disconnect(){

        console.log("Disconnect");

    },

    /* ==========================
       Send
    ========================== */

    async send(file){

        console.log("Send");

        console.log(file);

    },

    /* ==========================
       Receive
    ========================== */

    async receive(){

        console.log("Receive");

    }

};
