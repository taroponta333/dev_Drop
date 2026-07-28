/* =====================================
   DevDrop
   Clipboard API v0.1
===================================== */

const clipboardAPI={

    async copy(text){

        await navigator.clipboard.writeText(text);

        return true;

    },

    async read(){

        return await navigator.clipboard.readText();

    },

    async clear(){

        await navigator.clipboard.writeText("");

        return true;

    },

    async send(){

        return await this.read();

    }

};
