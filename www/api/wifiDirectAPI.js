/* =====================================
   DevDrop
   Wi-Fi Direct API v0.1
===================================== */

const wifiDirectAPI = {

    /* ==========================
       Enable
    ========================== */

    async enable(){

        console.log("Wi-Fi Direct Enable");

        return true;

    },

    /* ==========================
       Disable
    ========================== */

    async disable(){

        console.log("Wi-Fi Direct Disable");

        return true;

    },

    /* ==========================
       Start Discovery
    ========================== */

    async discover(){

        console.log("Wi-Fi Direct Discovery");

        return [];

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

        return true;

    },

    /* ==========================
       Host
    ========================== */

    async createGroup(){

        console.log("Create Group");

        return {

            ssid:"DevDrop",

            password:"12345678"

        };

    },

    /* ==========================
       Join
    ========================== */

    async joinGroup(ssid,password){

        console.log("Join Group");

        console.log(ssid);

        return true;

    },

    /* ==========================
       Send
    ========================== */

    async send(file){

        console.log("Wi-Fi Direct Send");

        console.log(file);

        return true;

    },

    /* ==========================
       Receive
    ========================== */

    async receive(){

        console.log("Wi-Fi Direct Receive");

        return null;

    },

    /* ==========================
       Cancel
    ========================== */

    async cancel(){

        console.log("Cancel");

        return true;

    },

    /* ==========================
       Progress
    ========================== */

    async progress(){

        return {

            percent:0,

            speed:0,

            transferred:0,

            total:0

        };

    },

    /* ==========================
       Status
    ========================== */

    async status(){

        return {

            enabled:true,

            connected:false,

            device:null

        };

    }

};
