// Filename: main.js

// Require.js allows us to configure shortcut alias
// There usage will become more apparent further along in the tutorial.
require.config({
	paths : {
		jquery : 'libs/jquery/jquery-2.1.1.min',
		underscore : 'libs/lodash/lodash.underscore.min',
		backbone : 'libs/backbone/backbone-min',
		templates : 'http://localhost:8084/app/template'
	},
	shim : {
		jquery : {
			exports : '$'
		},
		lodash : {
			exports : '_',
		},
		backbone : {
			deps : [ 'jquery', 'underscore' ],
			exports : 'Backbone'
			
		},
		urlArgs : {
			'bust' : Date.now()
		}
	}

});

require([

// Load our app module and pass it to our definition function
'app' ], function() {
	
	$(function() {
		_.templateSettings = {
			interpolate : /\{\{([\s\S]+?)\}\}/g
			};
		});
	App.initialize();
});