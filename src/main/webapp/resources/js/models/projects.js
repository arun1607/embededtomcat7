define(['backbone'],function(Backbone) {
	var ProjectModel = Backbone.Model.extend({
		defaults : {
			name : "Harry Potter"
		}
	});
	// Return the model for the module
	return ProjectModel;
});