var gpio = require("rpi-gpio");
var config = require('./config.js');

var getPinStatus = function (pin, callback) {
    gpio.setup(pin, gpio.DIR_IN, function () {
        gpio.read(pin, function (err, value) {
            console.log(pin + " is " + value);
            callback(value);
        })
    })
};

exports.getRelayStatusById = function (relayId) {
    var pin = config.getPinByRelayId(relayId);
    var status = undefined;
    getPinStatus(pin, function (value) {
        status = value;        
    })
    
    return status;   
};

exports.getAllRelayStatus = function () {
    
    console.log("getAllRelayStatus");
};

exports.setRelayStatusById = function (relayId, mode) {
    
    var pin = config.getPinByRelayId(relayId);
    gpio.setup(pin, gpio.DIR_OUT, function () {
        gpio.write(pin, mode, function (err) {
            if (err) throw err;
            console.log("Relay: " + relayId + ", Pin: " + pin + " is set to " + mode);
        });
    });    
};