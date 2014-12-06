var Backbone = require('backbone');
var _ = require('underscore');
var $ = require('jquery');
var PostComment= require('./postComment');
var Template = require("./templates/commentsList.hbs")

module.exports = Backbone.View.extend({
	initialize: function (options) {
		this.activeModel = options.model;
		this.el = options.el;
		this.setupListeners();
	},
	setupListeners:function () {
		this.listenTo(this.activeModel, 'change', this.fetchComments);
		this.listenTo(this.activeModel.comments, 'sync', this.render);
		this.listenTo(this.activeModel.comments, 'add', this.render);
	},
	fetchComments: function(){
        this.activeModel.comments.fetch({reset:true});
	},
	render: function() {
		this.$el.html(Template({
            'comments' : this.activeModel.comments.toJSON()
        }));
		this.renderPostContent();
	},
	renderPostContent:function(){
		var postComment = new PostComment({el : $("#comments"), articleId : this.activeModel.get('id'), collection : this.activeModel.comments});
	}
});

