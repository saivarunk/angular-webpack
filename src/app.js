'use strict';

// import angular js

require('./vendor/angular.min.js');

var app = angular.module('demoApp',[]);

app.config(
    // config angular app
);

// import controllers, services, custom directives, constants here

require('./controllers.js');
require('./services.js');