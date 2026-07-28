/* =====================================
   DevDrop
   Account API v0.1
===================================== */

const accountAPI = {

    account:{

        name:"",

        icon:null,

        id:null

    },

    /* ==========================
       Initialize
    ========================== */

    async initialize(){

        console.log("Account Initialize");

        return true;

    },

    /* ==========================
       Get Name
    ========================== */

    async getName(){

        return this.account.name;

    },

    /* ==========================
       Set Name
    ========================== */

    async setName(name){

        this.account.name=name;

        return true;

    },

    /* ==========================
       Get Icon
    ========================== */

    async getIcon(){

        return this.account.icon;

    },

    /* ==========================
       Set Icon
    ========================== */

    async setIcon(icon){

        this.account.icon=icon;

        return true;

    },

    /* ==========================
       Get ID
    ========================== */

    async getID(){

        if(!this.account.id){

            this.account.id=crypto.randomUUID();

        }

        return this.account.id;

    },

    /* ==========================
       Reset
    ========================== */

    async reset(){

        this.account={

            name:"",

            icon:null,

            id:null

        };

        return true;

    },

    /* ==========================
       Get Profile
    ========================== */

    async getProfile(){

        return{

            id:await this.getID(),

            name:this.account.name,

            icon:this.account.icon

        };

    }

};
