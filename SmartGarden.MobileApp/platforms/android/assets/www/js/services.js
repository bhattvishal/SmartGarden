var services = angular.module('starter.services', ['ngResource'])

services.factory('DeviceService', function () {
    var devices = [{
        deviceName: 'Floor LedStrip',
        deviceCategory: 'Lighting',
        relayid: 1,
        active: false,
        schedule: {
            active: true,
            days: { Monday: true, Tuesday: false, Wednesday: false, Thursday: true, Friday: false, Saturday: false, Sunday: true },
            startTime: new Date(2015, 11, 10, 10, 00, 00, 00),
            endTime: new Date(2015, 11, 10, 10, 10, 00, 00)
        }
    }, {
        deviceName: 'TerraCotta Lamp',
        deviceCategory: 'Lighting',
        relayid: 2,
        active: false,
        schedule: {
            active: true,
            days: { Monday: true, Tuesday: false, Wednesday: false, Thursday: true, Friday: false, Saturday: false, Sunday: true },
            startTime: new Date(2015, 11, 10, 10, 00, 00, 00),
            endTime: new Date(2015, 11, 10, 10, 10, 00, 00)
        }
    }, {
        deviceName: 'Zone One Fountain',
        deviceCategory: 'Fountain',
        relayid: 3,
        active: false,
        schedule: {
            active: true,
            days: { Monday: true, Tuesday: false, Wednesday: false, Thursday: true, Friday: false, Saturday: false, Sunday: true },
            startTime: new Date(2015, 11, 10, 10, 00, 00, 00),
            endTime: new Date(2015, 11, 10, 10, 10, 00, 00)
        }
    }, {
        deviceName: 'Zone Two Fountain',
        deviceCategory: 'Fountain',
        relayid: 4,
        active: false,
        schedule: {
            active: true,
            days: { Monday: true, Tuesday: false, Wednesday: false, Thursday: true, Friday: false, Saturday: false, Sunday: true },
            startTime: new Date(2015, 11, 10, 10, 00, 00, 00),
            endTime: new Date(2015, 11, 10, 10, 10, 00, 00)
        }
    }, {
        deviceName: 'Zone One Watering',
        deviceCategory: 'Watering',
        relayid: 5,
        active: false,
        schedule: {
            active: true,
            days: { Monday: true, Tuesday: false, Wednesday: false, Thursday: true, Friday: false, Saturday: false, Sunday: true },
            startTime: new Date(2015, 11, 10, 10, 00, 00, 00),
            endTime: new Date(2015, 11, 10, 10, 10, 00, 00)
        }
    }, {
        deviceName: 'Zone Two Watering',
        deviceCategory: 'Watering',
        relayid: 6,
        active: false,
        schedule: {
            active: true,
            days: { Monday: true, Tuesday: false, Wednesday: false, Thursday: true, Friday: false, Saturday: false, Sunday: true },
            startTime: new Date(2015, 11, 10, 10, 00, 00, 00),
            endTime: new Date(2015, 11, 10, 10, 10, 00, 00)
        }
    }, {
        deviceName: 'Zone Three Watering',
        deviceCategory: 'Watering',
        relayid: 7,
        schedule: {
            active: true,
            days: { Monday: true, Tuesday: false, Wednesday: false, Thursday: true, Friday: false, Saturday: false, Sunday: true },
            startTime: new Date(2015, 11, 10, 10, 00, 00, 00),
            endTime: new Date(2015, 11, 10, 10, 10, 00, 00)
        }
    }, {
        deviceName: 'Zone Four Watering',
        deviceCategory: 'Watering',
        relayid: 8,
        schedule: {
            active: true,
            days: { Monday: true, Tuesday: false, Wednesday: false, Thursday: true, Friday: false, Saturday: false, Sunday: true },
            startTime: new Date(2015, 11, 10, 10, 00, 00, 00),
            endTime: new Date(2015, 11, 10, 10, 10, 00, 00)
        }
    }];

    return {
        all: function () {
            return devices;
        },
        getDevicesByCategory: function (category) {

            return Enumerable.From(devices)
                .Where(function (x) { return x.deviceCategory == category }).ToArray();
        },
        getDeviceByRelayId: function (relayId) {

            return Enumerable.From(devices)
                .First(function (x) { return x.relayid == relayId });
        }
    }
});

services.factory('RelayService', function ($resource) {
    var data = $resource("http://192.168.1.110:1337/api/relays/:relay_id", { relay_id: "@relay_id" }, {
        update: {
            method: 'PUT'
        }
    });
    return data;
});

services.factory('ScheduleService', function ($resource) {
    var data = $resource("http://192.168.1.110:1337/api/schedules/:relay_id", { relay_id: "@relay_id" }, {
        update: {
            method: 'PUT'
        }
    });
    return data;
});