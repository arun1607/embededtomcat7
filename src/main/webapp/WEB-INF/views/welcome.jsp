<html ng-app="myApp">
<head>
<meta charset="utf-8">
<title>Angular.js Example</title>
<link rel="stylesheet" href="resources/css/foundation.min.css"
	type="text/css" />
<script src="resources/js/libs/angular/angular.min.js"></script>
<script src="resources/js/libs/angular/angular-route.min.js"></script>

<script>
	angular.module('myApp', []).directive('myDirective', function() {
		return {
			restrict : 'EAC',
			replace : true,
			scope : {
				myUrl : '@', // binding strategy
				myLinkText : '@' // binding strategy
			},
			template : '<a href="{{myUrl}}">{{myLinkText}}</a>'
		}
	});
</script>
</head>
<body>
	<div my-directive my-url="http://google.com"
		my-link-text="Click me to go to Google"></div>
</body>
</html>