// Filename: router.js
define([ 'views/projects/list',
		'views/users/list' ], function(ProjectListView,
		UserListView) {
	var AppRouter = Backbone.Router.extend({
		routes : {
			// Define some URL routes
			"" : 'showProjects',
			'projects' : 'showProjects',
			'users' : 'showUsers',

			// Default
			'*actions' : 'defaultAction'

		},
		showProjects : function() {
			// Call render on the module we loaded in via the dependency array
			// 'views/projects/list'
			var projectListView = new ProjectListView();
			projectListView.render();
		},
		showUsers : function() {
			var userListView = new UserListView();
			userListView.render();
		},
		defaultAction : function(actions) {
			// We have no matching route, lets just log what the URL was
			console.log('No route:', actions);
		}
	});

	var initialize = function() {
		var router = new AppRouter();
		Backbone.history.start();
	};
	return {
		initialize : initialize
	};
});