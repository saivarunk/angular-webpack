'use strict';

var app = angular.module('demoApp');

app.controller('HomeController', HomeController);

function HomeController (){
    
    var vm = this;
    vm.title = "Angular 1.x + Webpack Starter Kit";

}