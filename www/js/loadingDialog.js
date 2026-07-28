/* =====================================
   DevDrop
   Loading Dialog v0.1
===================================== */

let loadingDialog = null;

function showLoadingDialog(title, message){

    if(loadingDialog){

        return;

    }

    loadingDialog=document.createElement("div");

    loadingDialog.className="loading-overlay";

    loadingDialog.innerHTML=`

        <div class="loading-dialog">

            <div class="loading-spinner"></div>

            <h2>

                ${title}

            </h2>

            <p>

                ${message}

            </p>

            <button id="loading-cancel">

                Cancel

            </button>

        </div>

    `;

    document.body.appendChild(loadingDialog);

    document
        .getElementById("loading-cancel")
        .onclick=hideLoadingDialog;

}

function hideLoadingDialog(){

    if(!loadingDialog){

        return;

    }

    loadingDialog.remove();

    loadingDialog=null;

}

function setLoadingMessage(text){

    if(!loadingDialog){

        return;

    }

    loadingDialog.querySelector("p").textContent=text;

}
