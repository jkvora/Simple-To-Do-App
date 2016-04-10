var app=angular.module('myApp', ['ngMaterial','ui.router']);

app.config(function($stateProvider, $urlRouterProvider){
  //Login State
  $stateProvider.state('login', {
    url: '/login',
    templateUrl:"views/login/login.html",
  });

  //Signup State
  $stateProvider.state('signup', {
    url: "/signup",
    templateUrl: "views/signup/signup.html",
  });

  //Home
  $stateProvider.state('home', {
    url: '/',
  });

  $urlRouterProvider.otherwise('/');
})
