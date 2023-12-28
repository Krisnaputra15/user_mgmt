require('dotenv').config();

function returnMessage(success, code, message, data){
    if(success){
        return JSON.stringify({
            "success" : true,
            "message" : message,
            "data" : data,
            "code" : code
        });
    } else {
        return JSON.stringify({
            "success" : false,
            "message" : message,
            "error" : data,
            "code" : code
        });
    }
    
}

module.exports = {
    returnMessage
};