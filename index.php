<!DOCTYPE html>
<html lang="en">
<head>
  <meta name="viewport" content="width=device-width,initial-scale=1">
    <title>
        Simple To-Do App
    </title>
    <script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.4.8/angular.min.js"></script>
    <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.0/jquery.min.js"></script>
    <script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>
    <script  src="js/scripts.js"></script>
</head>

<body ng-app="myApp" ng-controller="appcontroller">
<div class="container">
      <div class="col-xs-9" style=padding-top:25px>
        <div class="form-group">
        			<input type="text" class="form-control"  ng-model="list" ng-keyup="pressEnter()"  placeholder="To Do things">
        </div>
      </div>

    <div class="col-xs-3" style=padding-top:25px>
					 <button class="btn btn-primary btn-block" ng-click="addTask()"">
						<span>Add</span>
					</a>
      </div>
</div>


<!--Display list--->
<ul ng-repeat="item in taskslist track by $index" style="clear:both">
    <li>{{item}}</li>
</ul>

</body>
</html>
