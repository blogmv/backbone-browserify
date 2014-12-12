var Backbone = require('backbone'),
	$ = require('jquery'),
	Template = require("./templates/commentsList.hbs")

module.exports = Backbone.View.extend({
	initialize: function (options) {
		this.activeModel = options.model;
		this.el = options.el;
		this.setupListeners();
	},
	setupListeners:function () {
		this.listenTo(this.activeModel, 'change', this.fetchComments);
		this.listenTo(this.activeModel.comments, 'sync', this.render);
	},
	fetchComments: function(){
        this.activeModel.getComments();
	},
	render: function() {
		this.$el.html(Template({
            'comments' : this.activeModel.comments.toJSON()
        }));
	}
});

