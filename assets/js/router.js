var Backbone = require('backbone');
var $ = require('jquery');
var ActiveModel = require('./model/article');
var MainView = require('./view/mainView');
var ArticleContent = require('./view/articleContent');
var ArticleComment = require('./view/articleComment');
var ArticleCollection = require('./collection/articles');
Backbone.$ = $

module.exports = Backbone.Router.extend({
	routes: {
		"":"renderHome"
	},
	renderHome: function() {     
		activeModel = new ActiveModel();
		articleCollection = new ArticleCollection();
		mainView = new MainView({el : $(".main"), model : activeModel, collection: articleCollection});
		appContent = new ArticleContent({el : $("#articleContent"), model : activeModel});
		appComment = new ArticleComment({el : $(".discussion"), model : activeModel});

	},

	startApp:function(){
		Backbone.history.start();
	}
});