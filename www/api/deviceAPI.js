/* =====================================
   DevDrop
   Device API v0.1
===================================== */

const deviceAPI = {

    /* ==========================
       Device Name
    ========================== */

    async getName(){

        console.log("Get Device Name");

        return "Unknown Device";

    },

    /* ==========================
       Device Model
    ========================== */

    async getModel(){

        console.log("Get Device Model");

        return "Unknown Model";

    },

    /* ==========================
       OS Version
    ========================== */

    async getVersion(){

        console.log("Get OS Version");

        return "Unknown";

    },

    /* ==========================
       Platform
    ========================== */

    async getPlatform(){

        console.log("Get Platform");

        return "Android";

    },

    /* ==========================
       Battery
    ========================== */

    async getBattery(){

        console.log("Get Battery");

        return {

            level:100,

            charging:false

        };

    },

    /* ==========================
       Bluetooth Name
    ========================== */

    async getBluetoothName(){

        console.log("Get Bluetooth Name");

        return "DevDrop Device";

    },

    /* ==========================
       Local IP
    ========================== */

    async getIPAddress(){

        console.log("Get IP Address");

        return "0.0.0.0";

    },

    /* ==========================
       MAC Address
    ========================== */

    async getMAC(){

        console.log("Get MAC");

        return "00:00:00:00:00:00";

    },

    /* ==========================
       Device ID
    ========================== */

    async getID(){

        console.log("Get Device ID");

        return crypto.randomUUID();

    },

    /* ==========================
       Device Information
    ========================== */

    async getInfo(){

        return {

            name:await this.getName(),

            model:await this.getModel(),

            version:await this.getVersion(),

            platform:await this.getPlatform(),

            battery:await this.getBattery(),

            bluetooth:await this.getBluetoothName(),

            ip:await this.getIPAddress(),

            mac:await this.getMAC(),

            id:await this.getID()

        };

    }

};
