var Backbone = require('backbone'),
	$ = require('jquery'),
	Template =  require("./templates/article.hbs");

module.exports = Backbone.View.extend({
	
	initialize: function (options) {
		this.el = options.el;
		this.activeModel = options.model;
		this.listenTo(this.activeModel, 'change', this.render);
	},
	render: function() {
		this.$el.html(Template(this.activeModel.toJSON()));
	}
});