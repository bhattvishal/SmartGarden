angular.module('starter.controllers', [])

.controller('LightingCtrl', function ($scope, RelayService, ScheduleService, DeviceService) {

    $scope.devices = DeviceService.getDevicesByCategory('Lighting');

    $scope.OnChange = function (device) {
        RelayService.update({ relay_id: device.relayid }, { active: device.active });
    }
})

.controller('FountainsCtrl', function ($scope, RelayService, ScheduleService, DeviceService) {

    $scope.devices = DeviceService.getDevicesByCategory('Fountain');

    $scope.OnChange = function (device) {
        RelayService.update({ relay_id: device.relayid }, { active: device.active });
    }
})

.controller('WateringCtrl', function ($scope, RelayService, ScheduleService, DeviceService) {

    $scope.devices = DeviceService.getDevicesByCategory('Watering');

    $scope.OnChange = function (device) {
        RelayService.update({ relay_id: device.relayid }, { active: device.active });
    }
})

.controller('ScheduleCtrl', function ($scope, $stateParams, DeviceService, ScheduleService) {

    var device = DeviceService.getDeviceByRelayId($stateParams.relayid);
    $scope.schedule = device.schedule;
    $scope.deviceName = device.deviceName;

    startTimeCallback = function (val) {
        if (typeof (val) === 'undefined') {
            console.log('Time not selected');
        } else {
            $scope.startDateObject.inputEpochTime = val;
            var selectedTime = new Date(val * 1000);
            console.log('Selected epoch is : ', val, 'and the time is ', selectedTime.getUTCHours(), ':', selectedTime.getUTCMinutes(), 'in UTC');
        }
    };

    endTimeCallback = function (val) {
        if (typeof (val) === 'undefined') {
            console.log('Time not selected');
        } else {
            $scope.endDateObject.inputEpochTime = val;
            var selectedTime = new Date(val * 1000);
            console.log('Selected epoch is : ', val, 'and the time is ', selectedTime.getUTCHours(), ':', selectedTime.getUTCMinutes(), 'in UTC');
        }
    };

    $scope.startDateObject = {
        inputEpochTime: ((new Date()).getHours() * 60 * 60),  //Optional
        step: 10,  //Optional
        format: 12,  //Optional
        titleLabel: 'Start Time',  //Optional
        setLabel: 'Set',  //Optional
        closeLabel: 'Cancel',  //Optional
        setButtonType: 'button-positive',  //Optional
        closeButtonType: 'button-stable',  //Optional
        callback: function (val) {    //Mandatory
            startTimeCallback(val);
        }
    };

    $scope.endDateObject = {
        inputEpochTime: ((new Date()).getHours() * 60 * 60),  //Optional
        step: 10,  //Optional
        format: 12,  //Optional
        titleLabel: 'End Time',  //Optional
        setLabel: 'Set',  //Optional
        closeLabel: 'Cancel',  //Optional
        setButtonType: 'button-positive',  //Optional
        closeButtonType: 'button-stable',  //Optional
        callback: function (val) {    //Mandatory
            endTimeCallback(val);
        }
    };

    $scope.updateSchedule = function () {
        ScheduleService.update({ relay_id: device.relay_id }, { schedule: device.schedule });
    }
})