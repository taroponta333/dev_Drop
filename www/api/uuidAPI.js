/* =====================================
   DevDrop
   UUID API v0.1
===================================== */

const uuidAPI={

    /* ==========================
       Services
    ========================== */

    services:{

        "1800":"Generic Access",

        "1801":"Generic Attribute",

        "180A":"Device Information",

        "180F":"Battery Service",

        "180D":"Heart Rate",

        "1812":"Human Interface Device",

        "1816":"Cycling Speed",

        "1818":"Cycling Power",

        "1819":"Location Navigation",

        "1826":"Fitness Machine"

    },

    /* ==========================
       Characteristics
    ========================== */

    characteristics:{

        "2A00":"Device Name",

        "2A01":"Appearance",

        "2A04":"Peripheral Preferred Connection Parameters",

        "2A19":"Battery Level",

        "2A24":"Model Number",

        "2A25":"Serial Number",

        "2A26":"Firmware Revision",

        "2A27":"Hardware Revision",

        "2A28":"Software Revision",

        "2A29":"Manufacturer Name"

    },

    /* ==========================
       Normalize
    ========================== */

    normalize(uuid){

        uuid =
            uuid.toUpperCase();

        if(uuid.length===4){

            return uuid;

        }

        return uuid.substring(4,8);

    },

    /* ==========================
       Service Name
    ========================== */

    getServiceName(uuid){

        const id =
            this.normalize(uuid);

        return this.services[id] ||

            "Unknown Service";

    },

    /* ==========================
       Characteristic Name
    ========================== */

    getCharacteristicName(uuid){

        const id =
            this.normalize(uuid);

        return this.characteristics[id] ||

            "Unknown Characteristic";

    }

};
