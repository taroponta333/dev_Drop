/* =====================================
   DevDrop
   Transfer API v0.1
===================================== */

const transferAPI = {

    /* ==========================
       Send
    ========================== */

    async send(data, device){

        console.log("Transfer Send");

        console.log(data);

        console.log(device);

        // v0.1 ダミー
        return true;

    },

    /* ==========================
       Receive
    ========================== */

    async receive(){

        console.log("Transfer Receive");

        return null;

    },

    /* ==========================
       Cancel
    ========================== */

    async cancel(){

        console.log("Transfer Cancel");

        return true;

    },

    /* ==========================
       Pause
    ========================== */

    async pause(){

        console.log("Transfer Pause");

        return true;

    },

    /* ==========================
       Resume
    ========================== */

    async resume(){

        console.log("Transfer Resume");

        return true;

    },

    /* ==========================
       Progress
    ========================== */

    async progress(){

        return{

            percent:0,

            speed:0,

            transferred:0,

            total:0,

            remaining:0

        };

    },

    /* ==========================
       History
    ========================== */

    async history(){

        return[];

    },

    /* ==========================
       Device Connected
    ========================== */

    async isConnected(){

        return false;

    },

    /* ==========================
       Get Connected Device
    ========================== */

    async getDevice(){

        return null;

    },

    /* ==========================
       Estimate Time
    ========================== */

    estimate(size,speed){

        if(speed<=0){

            return Infinity;

        }

        return Math.ceil(size/speed);

    }

};
