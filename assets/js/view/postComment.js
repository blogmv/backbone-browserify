var Backbone = require('backbone'),
	 $ = require('jquery'),
	 CommentModel = require("../model/comment"),
	 Template = require("./templates/commentForm.hbs");

module.exports = Backbone.View.extend({
	
	events:{
		"click #postComment":"postComment",
		"change input":"updateModel",
		"change textarea":"updateModel"
	},
	initialize: function (options) {
		this.el = options.el;
		this.collection = options.collection;
		this.model = new CommentModel({"articleId": options.articleId});
		this.render();
	},
	render: function() {
		this.$el.html(Template());
	},
	updateModel:function(e){
		this.model.setContent(e.target.name, e.target.value);
	},
	postComment:function(e){
		e.preventDefault();
		this.collection.postNewComment(this.model);
	}
});