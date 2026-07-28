/* =====================================
   DevDrop
   Plugin API v0.1
===================================== */

const pluginAPI={

    plugins:{},

    async has(name){

        return !!this.plugins[name];

    },

    async enable(name){

        this.plugins[name]=true;

        return true;

    },

    async disable(name){

        this.plugins[name]=false;

        return true;

    },

    async version(name){

        return "Unknown";

    },

    async list(){

        return this.plugins;

    }

};
