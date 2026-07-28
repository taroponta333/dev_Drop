/* =====================================
   DevDrop
   History API v0.1
===================================== */

const historyAPI = {

    history:[],

    /* ==========================
       Add
    ========================== */

    async add(item){

        console.log("History Add");

        item.time = Date.now();

        this.history.unshift(item);

        return true;

    },

    /* ==========================
       Get All
    ========================== */

    async getAll(){

        return this.history;

    },

    /* ==========================
       Get Recent
    ========================== */

    async getRecent(limit=10){

        return this.history.slice(0,limit);

    },

    /* ==========================
       Clear
    ========================== */

    async clear(){

        this.history=[];

        return true;

    },

    /* ==========================
       Remove
    ========================== */

    async remove(index){

        if(index<0||index>=this.history.length){

            return false;

        }

        this.history.splice(index,1);

        return true;

    },

    /* ==========================
       Search
    ========================== */

    async search(keyword){

        return this.history.filter(item=>{

            return JSON.stringify(item)

                .toLowerCase()

                .includes(keyword.toLowerCase());

        });

    }

};
