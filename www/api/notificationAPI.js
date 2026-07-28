/* =====================================
   DevDrop
   Notification API v0.1
===================================== */

const notificationAPI = {

    /* ==========================
       Success
    ========================== */

    success(title,message){

        console.log("[SUCCESS]");

        console.log(title);

        console.log(message);

        alert("✅ "+title+"\n\n"+message);

    },

    /* ==========================
       Error
    ========================== */

    error(title,message){

        console.log("[ERROR]");

        console.log(title);

        console.log(message);

        alert("❌ "+title+"\n\n"+message);

    },

    /* ==========================
       Warning
    ========================== */

    warning(title,message){

        console.log("[WARNING]");

        console.log(title);

        console.log(message);

        alert("⚠️ "+title+"\n\n"+message);

    },

    /* ==========================
       Information
    ========================== */

    info(title,message){

        console.log("[INFO]");

        console.log(title);

        console.log(message);

        alert("ℹ️ "+title+"\n\n"+message);

    },

    /* ==========================
       Confirm
    ========================== */

    async confirm(title,message){

        return confirm(

            title+"\n\n"+message

        );

    },

    /* ==========================
       Prompt
    ========================== */

    async prompt(title,message){

        return prompt(

            title+"\n\n"+message

        );

    }

};
