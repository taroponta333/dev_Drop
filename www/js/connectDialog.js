/* =====================================
   DevDrop
   Connect Dialog v0.1
===================================== */

function showConnectDialog(device){

    // 背景
    const overlay=document.createElement("div");

    overlay.className="dialog-overlay";

    // ダイアログ
    const dialog=document.createElement("div");

    dialog.className="connect-dialog";

    dialog.innerHTML=`

        <div class="dialog-icon">

            📱

        </div>

        <h2>

            ${device.name}

        </h2>

        <p>

            Bluetooth Address

        </p>

        <div class="dialog-address">

            ${device.address}

        </div>

        <div class="dialog-buttons">

            <button id="cancel-connect">

                Cancel

            </button>

            <button id="start-connect">

                Connect

            </button>

        </div>

    `;

    overlay.appendChild(dialog);

    document.body.appendChild(overlay);

    // キャンセル
    dialog.querySelector("#cancel-connect").onclick=()=>{

        overlay.remove();

    };

    // 接続
    dialog.querySelector("#start-connect").onclick=()=>{

        overlay.remove();

        alert("v0.2でBluetooth接続を実装します。");

    };

}
