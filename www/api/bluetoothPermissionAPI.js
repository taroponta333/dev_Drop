/* =====================================
   DevDrop
   Bluetooth Permission API v0.1
===================================== */

const bluetoothPermissionAPI = {

    /* ==========================
       Check Permission
    ========================== */

    async check(){

        console.log("Bluetooth Permission Check");

        // v0.1 ダミー
        return true;

    },

    /* ==========================
       Request Permission
    ========================== */

    async request(){

        console.log("Bluetooth Permission Request");

        // v0.1 ダミー
        return true;

    },

    /* ==========================
       Has Permission
    ========================== */

    async hasPermission(){

        return await this.check();

    }

};
