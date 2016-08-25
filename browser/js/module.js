'use strict';

var juke = angular.module('juke', ['ui.router']);

juke.config(function($urlRouterProvider){
	$urlRouterProvider.when('', '/albums');
})
