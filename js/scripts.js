var app=angular.module('myApp',[]);

app.controller('appcontroller',function($scope){

$scope.taskslist=[];

$scope.pressEnter=function() {
  if(event.which==13){
    $scope.addTask();
    $scope.list="";
  }
};

$scope.addTask=function () {
  if($scope.list!=""){
    $scope.taskslist.push($scope.list);
  }
    console.log($scope.taskslist);
};



});
