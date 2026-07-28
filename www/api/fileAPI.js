/* =====================================
   DevDrop
   File API v0.1
===================================== */

const fileAPI = {

    /* ==========================
       Select File
    ========================== */

    async selectFile(){

        console.log("Select File");

        // v0.1 ダミー
        return {

            name:"sample.apk",

            path:"/storage/emulated/0/Download/sample.apk",

            size:24567891,

            type:"application/vnd.android.package-archive"

        };

    },

    /* ==========================
       Select Folder
    ========================== */

    async selectFolder(){

        console.log("Select Folder");

        return {

            name:"MyProject",

            path:"/storage/emulated/0/MyProject"

        };

    },

    /* ==========================
       Read Text File
    ========================== */

    async readText(path){

        console.log("Read", path);

        return "";

    },

    /* ==========================
       Write Text File
    ========================== */

    async writeText(path, text){

        console.log("Write", path);

        return true;

    },

    /* ==========================
       Exists
    ========================== */

    async exists(path){

        console.log("Exists", path);

        return true;

    },

    /* ==========================
       Delete
    ========================== */

    async delete(path){

        console.log("Delete", path);

        return true;

    },

    /* ==========================
       Copy
    ========================== */

    async copy(source, destination){

        console.log("Copy");

        return true;

    },

    /* ==========================
       Move
    ========================== */

    async move(source, destination){

        console.log("Move");

        return true;

    },

    /* ==========================
       File Info
    ========================== */

    async info(path){

        console.log("Info", path);

        return {

            name:"sample.apk",

            size:24567891,

            modified:Date.now()

        };

    }

};
