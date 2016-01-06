var http = require('http');
var express = require('express');
var app = express();
var bodyparser = require('body-parser');
var GPIOCtrl = require('./GPIOController.js')
var scheduleManager = require('./ScheduleManager.js');

app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

var PORT_NUM = 1337; 
var port = process.env.PORT || PORT_NUM;

var router = express.Router();

router.get('/', function (req, res) {
    res.json({ message: "Server is ready" });
});

router.route('/relays')
.get(function (req, res) {
    //var result = GPIOCtrl.getAllRelayStatus();
    var result = "Service is running, available relays 4";
    res.json(result);
})
.post(function (req, res) {

    
});

router.route('/relays/:relay_id')
.get(function (req, res) {
    
    //var result = GPIOCtrl.getRelayStatusById(req.params.relay_id);    
    res.json({ result: result });
})

.put(function (req, res) {
    
    var active = req.body.active.toString();
    var mode = active === 'true' ? 1 : 0;
        
    GPIOCtrl.setRelayStatusById(req.params.relay_id, mode);
    var result = "Relay " + req.params.relay_id + " is set to " + mode;
    console.log(result);
    res.json({ result: result});
});

router.route('/schedules')
.get(function (req, res) {

})
.post(function (req, res) {

});

router.route('/schedules/:schedule_id')
.get(function (req, res) {

})
.put(function (req, res) {

});

app.use('/api', router);

// Start the server and listen on port 8080
app.listen(port);
console.log('Smart Garden Server running at port ' + PORT_NUM);