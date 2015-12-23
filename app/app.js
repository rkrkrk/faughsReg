'use strict';

// Declare app level module which depends on views, and components
angular.module('faughsApp', [
  'ngRoute',
  'ngMaterial',
  // 'myApp.view1',
  // 'myApp.view2',
  'myApp.version'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.

  	when('/',{
  		templateUrl:'home/home.html',
  		controller: 'HomeCtrl'
  	}).

    when('/home',{
      templateUrl:'home/home.html',
      controller: 'HomeCtrl'
    }).

  	otherwise({redirectTo: '/'});
}]);
