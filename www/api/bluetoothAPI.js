/* =====================================
   DevDrop
   Bluetooth API v0.2
   Web Bluetooth Edition
===================================== */

const bluetoothAPI = {

    device: null,

    server: null,

    services: [],

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

        this.device =
        await navigator.bluetooth.requestDevice({

            acceptAllDevices: true,

            optionalServices: [

                "battery_service"

            ]

        });

        return [

            {

                id: this.device.id,

                name: this.device.name || "Unknown",

                address: this.device.id,

                connected: false,

                device: this.device

            }

        ];

    },

    /* ==========================
       Connect
    ========================== */

    async connect(device){

        this.device = device;

        if(!this.device){

            throw new Error(
                "Device Not Selected"
            );

        }

        this.server =
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

            throw new Error(
                "Not Connected"
            );

        }

        const services =
            await this.server.getPrimaryServices();

        this.services = services;

        return services.map(service => ({

            uuid: service.uuid,

            service: service

        }));

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

    async readCharacteristic(characteristic){

        const value =
            await characteristic.readValue();

        return value;

    },

    /* ==========================
       Decode Value
    ========================== */

    decodeValue(value){

        try{

            return new TextDecoder().decode(value);

        }catch(e){

            return "";

        }

    },

    /* ==========================
       Read UInt8
    ========================== */

    readUint8(value){

        return value.getUint8(0);

    },

    /* ==========================
       Write Characteristic
    ========================== */

    async writeCharacteristic(characteristic,data){

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
