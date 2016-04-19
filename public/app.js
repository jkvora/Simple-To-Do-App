var app=angular.module('myApp', ['ngMaterial','ui.router','ui.validate']);

app.config(function($stateProvider, $urlRouterProvider){
  //Login State
  $stateProvider.state('login', {
    url: '/login',
    templateUrl:"components/login/login.html",
    controller:'LoginCtrl'
  });

  //Signup State
  $stateProvider.state('signup', {
    url: "/signup",
    templateUrl: "components/signup/signup.html",
    controller:'SignupCtrl'
  });

  //Home
  $stateProvider.state('home', {
    url: '/',
  });

  //Otherwise
  $urlRouterProvider.otherwise('/');
})
