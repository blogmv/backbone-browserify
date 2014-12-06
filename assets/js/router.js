var Backbone = require('backbone');
var $ = require('jquery');
var ActiveModel = require('./model/article');
var ArticleViewList = require('./view/articleList');
var ArticleViewContent = require('./view/articleContent');
var ArticleViewComment = require('./view/articleComment');
var ArticleCollection = require('./collection/articles');
var PostComment = require('./view/postComment');
Backbone.$ = $

module.exports = Backbone.Router.extend({
	initialize:function(callback){
		 activeModel = new ActiveModel();
		 articleCollection = new ArticleCollection();
		 articleViewList = new ArticleViewList({el : $(".main"), model : activeModel, collection: articleCollection});
		 articleViewContent = new ArticleViewContent({el : $("#articleContent"), model : activeModel});
		 articleViewComment = new ArticleViewComment({el : $(".discussion"), model : activeModel});
		 postComment = new PostComment({el : $("#comments"), articleId : activeModel.get('id'), collection : activeModel.comments});
	 	 articleCollection.once('sync', this.startApp, this);
		 articleCollection.getArticles();
	},
	routes: {
		"":"renderHome",
		"article/:id":"renderArticle"
	},
	renderHome: function() {     
		this.setMainArticle(articleCollection.at(0));
	},
	renderArticle:function (articleId) {
		
		this.setMainArticle(articleCollection.get(articleId));
	},
	setMainArticle: function(article) {
        if (!article) {
            activeModel.clear();
            return
        }

        article = article.toJSON();
        activeModel.set(article);
    },
	startApp:function(){
		Backbone.history.start();
	}
});