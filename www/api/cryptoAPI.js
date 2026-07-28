/* =====================================
   DevDrop
   Crypto API v0.1
===================================== */

const cryptoAPI = {

    /* ==========================
       Generate Key
    ========================== */

    async generateKey(){

        console.log("Generate Key");

        return "DevDrop-Key";

    },

    /* ==========================
       Encrypt
    ========================== */

    async encrypt(data,key){

        console.log("Encrypt");

        console.log(data);

        // v0.1 ダミー
        return data;

    },

    /* ==========================
       Decrypt
    ========================== */

    async decrypt(data,key){

        console.log("Decrypt");

        console.log(data);

        // v0.1 ダミー
        return data;

    },

    /* ==========================
       Hash
    ========================== */

    async hash(data){

        console.log("Hash");

        return "hash";

    },

    /* ==========================
       Verify
    ========================== */

    async verify(data,hash){

        console.log("Verify");

        return true;

    },

    /* ==========================
       Random Token
    ========================== */

    async randomToken(length=32){

        const chars="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

        let token="";

        for(let i=0;i<length;i++){

            token+=chars.charAt(

                Math.floor(Math.random()*chars.length)

            );

        }

        return token;

    },

    /* ==========================
       Session Key
    ========================== */

    async createSession(){

        return{

            id:await this.randomToken(16),

            key:await this.generateKey()

        };

    }

};
