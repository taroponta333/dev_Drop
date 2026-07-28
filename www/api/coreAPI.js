/* =====================================
   DevDrop
   Core API v0.1
===================================== */

const coreAPI = {

    /* ==========================
       Bluetooth
    ========================== */

    bluetooth: bluetoothAPI,

    bluetoothPermission: bluetoothPermissionAPI,

    wifiDirect : wifiDirectAPI,

    crypto : cryptoAPI,

    notification : notificationAPI,

    settings : settingsAPI,

    clipboard : clipboardAPI,

    update : updateAPI,

    plugin : pluginAPI,

    /* ==========================
       File
    ========================== */

    file: fileAPI,

    /* ==========================
       Transfer
    ========================== */

    transfer: transferAPI,

    account : accountAPI,

    /* ==========================
       Device
    ========================== */

    device: deviceAPI,

    /* ==========================
       History
    ========================== */

    history: historyAPI
    
};
