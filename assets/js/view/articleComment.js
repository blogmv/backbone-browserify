var Backbone = require('backbone');
var _ = require('underscore');
var $ = require('jquery');
var PostComment= require('./postComment');

module.exports = Backbone.View.extend({
	template: _.template( $('#tmp-article-comments').html() ),
	initialize: function (options) {
		this.activeModel = options.model;
		this.el = options.el;
		this.listenTo(this.activeModel, 'change', this.fetchComments);
		
	},
	fetchComments: function(){
		this.activeModel.comments.once('sync', this.render, this);
		this.activeModel.comments.fetch();
	},
	render: function() {
		this.$el.html(this.template({
			'collection' : this.activeModel.comments
		}));
		this.renderPostContent();
	},
	renderPostContent:function(){
		debugger;
		var postComment = new PostComment({el : $(".comments"), articleID : this.model.get("id")});
	}
});

