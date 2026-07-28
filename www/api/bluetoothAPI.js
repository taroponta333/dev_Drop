/* =====================================
   DevDrop
   Bluetooth API v0.1
===================================== */

const bluetoothAPI = {

    /* ==========================
       Bluetooth状態
    ========================== */

    async isEnabled(){

        console.log("Bluetooth Check");

        // v0.1 ダミー
        return true;

    },

    /* ==========================
       Bluetooth ON
    ========================== */

    async enable(){

        console.log("Bluetooth Enable");

        return true;

    },

    /* ==========================
       Bluetooth OFF
    ========================== */

    async disable(){

        console.log("Bluetooth Disable");

        return true;

    },

    /* ==========================
       Nearby Scan
    ========================== */

    async scan(){

        console.log("Bluetooth Scan");

        // 仮想端末
        return [

            {

                id:"nothing",

                name:"Nothing Phone",

                address:"AA:BB:CC:11:22:33",

                connected:false

            },

            {

                id:"chromebook",

                name:"Chromebook",

                address:"44:55:66:77:88:99",

                connected:false

            }

        ];

    },

    /* ==========================
       Connect
    ========================== */

    async connect(device){

        console.log("Connect");

        console.log(device);

        return true;

    },

    /* ==========================
       Disconnect
    ========================== */

    async disconnect(){

        console.log("Disconnect");

    }

};
