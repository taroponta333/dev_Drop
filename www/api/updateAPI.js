/* =====================================
   DevDrop
   Update API v0.1
===================================== */

const updateAPI={

    version:"0.1 Alpha",

    async getVersion(){

        return this.version;

    },

    async check(){

        console.log("Check Update");

        return false;

    },

    async latest(){

        return this.version;

    },

    async download(){

        console.log("Download Update");

        return true;

    }

};
