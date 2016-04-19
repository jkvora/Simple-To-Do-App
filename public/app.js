var app=angular.module('myApp', ['ngMaterial','ui.router','ui.validate']);

app.config(function($stateProvider, $urlRouterProvider){
  //Login State
  $stateProvider.state('login', {
    url: '/login',
    templateUrl:"views/login/login.html",
    controller:'LoginCtrl'
  });

  //Signup State
  $stateProvider.state('signup', {
    url: "/signup",
    templateUrl: "views/signup/signup.html",
    controller:'SignupCtrl'
  });

  //Home
  $stateProvider.state('home', {
    url: '/',
  });

  //Otherwise
  $urlRouterProvider.otherwise('/');
})
