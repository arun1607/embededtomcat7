<html ng-app="nameApp">
<head>
<meta charset="utf-8">
<title>Angular.js Example</title>
<script src="js/libs/angular/angular.min.js"></script>
<script src="js/libs/angular/angular-route.min.js"></script>

<script>
	var app = angular.module('nameApp', []);

	app.controller('ParentController', function($scope) {
		$scope.person = {
			greeted : false
		};
	});
	app.controller('ChildController', function($scope) {
		$scope.sayHello = function() {
			$scope.person.name = "Ari Lerner";
			$scope.person.greeted = true;
		}
	});
</script>
</head>
<body>
	<div ng-controller="ParentController">
		<div ng-controller="ChildController">
			<a  href="" ng-click="sayHello()">Say hello</a>
		</div>
		{{ person }}
	</div>
</body>
</html>