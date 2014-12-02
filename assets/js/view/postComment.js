var Backbone = require('backbone');
var _ = require('underscore');
var $ = require('jquery');
var CommentModel = require("../model/comment");

module.exports = Backbone.View.extend({
	template: _.template( $('#comments').html()),
	
	events:{
		"click #postComment":"postComment",
		"change input":"updateModel",
		"change textarea":"updateModel"
	},
	initialize: function (options) {
		this.el = options.el;
		this.model = new CommentModel();
		this.setArticleId(options.articleID);
		this.render();
	},
	render: function() {
		this.$el.html(this.template());
	},
	setArticleId:function(id) {
		this.model.setArticleId(id);
	},
	updateModel:function(e){
		this.model.setContent(e.target.name, e.target.value);
	},
	postComment:function(){
		this.model.postComment();
	}
});