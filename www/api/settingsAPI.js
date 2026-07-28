/* =====================================
   DevDrop
   Settings API v0.1
===================================== */

const settingsAPI={

    settings:{},

    async get(key){

        return this.settings[key];

    },

    async set(key,value){

        this.settings[key]=value;

        return true;

    },

    async remove(key){

        delete this.settings[key];

        return true;

    },

    async reset(){

        this.settings={};

        return true;

    },

    async export(){

        return JSON.stringify(this.settings);

    },

    async import(json){

        this.settings=JSON.parse(json);

        return true;

    }

};
