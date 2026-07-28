/* =====================================
   DevDrop
   Bluetooth API v0.2
   Web Bluetooth Edition
===================================== */

const bluetoothAPI={

    device:null,

    server:null,

    services:[],

    /* ==========================
       Supported
    ========================== */

    async isSupported(){

        return !!navigator.bluetooth;

    },

    /* ==========================
       Scan
    ========================== */

    async scan(){

        if(!await this.isSupported()){

            throw new Error(
                "Web Bluetooth Not Supported"
            );

        }

        this.device=
        await navigator.bluetooth.requestDevice({

            acceptAllDevices:true,

            optionalServices:[

                "battery_service"

            ]

        });

        return{

            id:this.device.id,

            name:this.device.name || "Unknown"

        };

    },

    /* ==========================
       Connect
    ========================== */

    async connect(){

        if(!this.device){

            throw new Error("Device Not Selected");

        }

        this.server=
        await this.device.gatt.connect();

        return this.server.connected;

    },

    /* ==========================
       Disconnect
    ========================== */

    async disconnect(){

        if(

            this.device &&
            this.device.gatt.connected

        ){

            this.device.gatt.disconnect();

        }

    },

    /* ==========================
       Connected?
    ========================== */

    async isConnected(){

        if(!this.device){

            return false;

        }

        return this.device.gatt.connected;

    },

    /* ==========================
       Services
    ========================== */

    async getServices(){

        if(!this.server){

            throw new Error("Not Connected");

        }

        this.services=

        await this.server.getPrimaryServices();

        return this.services;

    },

    /* ==========================
       Characteristics
    ========================== */

    async getCharacteristics(service){

        return await service.getCharacteristics();

    },

    /* ==========================
       Read Characteristic
    ========================== */

    async read(characteristic){

        const value=

        await characteristic.readValue();

        return value;

    },

    /* ==========================
       Write Characteristic
    ========================== */

    async write(characteristic,data){

        await characteristic.writeValue(data);

        return true;

    },

    /* ==========================
       Device Info
    ========================== */

    getDevice(){

        return this.device;

    }

};
