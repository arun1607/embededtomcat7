// Filename: views/projects/list
define([
// Pull in the Collection module from above
'collections/projects', 'text!templates/projects/list.html' ], function(ProjectsCollection, projectsListTemplate) {
	var ProjectListView = Backbone.View.extend({
		el : $("#container"),
		initialize : function() {
			this.collection = new ProjectsCollection();
			this.collection.add([{
				name : "Ginger Kid"
			}, {
				name : 'John Mathew'
			}]);
			var compileTemplate = $.tmpl($("#userTemplate"), {'user':'Ginger Kid'});
			console.log(compileTemplate);
			this.$el.html(compileTemplate);
		}
	});
	// Returning instantiated views can be quite useful for having "state"
	return ProjectListView;
});