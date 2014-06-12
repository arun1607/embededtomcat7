// Filename: main.js

// Require.js allows us to configure shortcut alias
// There usage will become more apparent further along in the tutorial.
require.config({
	paths : {
		jquery : 'libs/jquery/jquery-2.1.1.min',
		lodash : 'libs/lodash/lodash.min',
		backbone : 'libs/backbone/backbone-min'
	},
	shim : {
		jquery : {
			exports : '$'
		},
		lodash : {
			exports : '_',
		},
		backbone : {
			deps : [ 'jquery', 'lodash' ],
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
	// The "app" dependency is passed in as "App"
	//$(function() {
	//	_.templateSettings = {
	//		interpolate : /\{\{([\s\S]+?)\}\}/g
	//		};
	//	});
	App.initialize();
});