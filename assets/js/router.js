var Backbone = require('backbone');
var $ = require('jquery');
var ActiveModel = require('./model/article');
var App = require('./view/app');
var ArticleContent = require('./view/articleContent');
var ArticleComment = require('./view/articleComment');
Backbone.$ = $

module.exports = Backbone.Router.extend({
	routes: {
		"":"renderHome"   
	},

	renderHome: function() {     
		activeModel = new ActiveModel();
		app = new App({el : $(".main"), model : activeModel});
		appContent = new ArticleContent({el : $(".main"), model : activeModel});
		appComment = new ArticleComment({el : $(".discussion"), model : activeModel});
	},

	startApp:function(){
		Backbone.history.start();
	}
});