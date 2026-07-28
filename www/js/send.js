/* =====================================
   DevDrop
   Send Screen v0.1
===================================== */

let sendData={

    file:null,

    folder:null,

    text:null,

    clipboard:null,

    target:null

};

/* ==========================
   初期化
========================== */

document.addEventListener("DOMContentLoaded",()=>{

    initSend();

});

function initSend(){

    document
        .getElementById("back-btn")
        .onclick=goBack;

    document
        .getElementById("refresh-btn")
        .onclick=refreshTarget;

    document
        .getElementById("select-file")
        .onclick=selectFile;

    document
        .getElementById("select-folder")
        .onclick=selectFolder;

    document
        .getElementById("select-text")
        .onclick=selectText;

    document
        .getElementById("select-clipboard")
        .onclick=selectClipboard;

    document
        .getElementById("send-btn")
        .onclick=startSend;

}

/* ==========================
   Navigation
========================== */

function goBack(){

    window.location.href="index.html";

}

/* ==========================
   Refresh Device
========================== */

function refreshTarget(){

    alert("v0.2 Device取得予定");

}

/* ==========================
   File
========================== */

async function selectFile(){

    const file = await fileAPI.selectFile();

    sendData.file = file;

    updateSelected("📄 " + file.name);

}

/* ==========================
   Folder
========================== */

async function selectFolder(){

    const folder = await fileAPI.selectFolder();

    sendData.folder = folder;

    updateSelected("📁 " + folder.name);

}

/* ==========================
   Text
========================== */

function selectText(){

    const text=prompt("送信するテキスト");

    if(!text){

        return;

    }

    sendData.text=text;

    updateSelected("📝 Text");

}

/* ==========================
   Clipboard
========================== */

async function selectClipboard(){

    try{

        const text=await navigator.clipboard.readText();

        sendData.clipboard=text;

        updateSelected("📋 Clipboard");

    }catch(e){

        alert("Clipboard取得失敗");

    }

}

/* ==========================
   Update
========================== */

function updateSelected(name){

    document
        .getElementById("selected-name")
        .textContent=name;

}

/* ==========================
   Send
========================== */

async function startSend(){

    if(

        !sendData.file &&
        !sendData.folder &&
        !sendData.text &&
        !sendData.clipboard

    ){

        alert("送信するデータがありません");

        return;

    }

    showLoadingDialog(

        "Preparing",

        "DevDrop"

    );

    setTimeout(()=>{

        hideLoadingDialog();

        alert("v0.2で送信を実装します");

    },2000);

}
