var app=angular.module('myApp',[]);

app.controller('appcontroller',function($scope){

$scope.taskslist=[];

$scope.pressEnter=function() {
  if(event.which==13){
    $scope.addTask();
  }
};

$scope.addTask=function () {
  if($scope.list!=""){
    $scope.taskslist.push($scope.list);
  }
      $scope.list="";
    console.log($scope.taskslist);
};

});
