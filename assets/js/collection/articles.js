var Backbone = require('backbone');
var ArticleModel = require('../model/article');

module.exports = Backbone.Collection.extend({
	
	url:   'http://blogmv-api.appspot.com/api/articles/',
	model: ArticleModel,
	getArticles:function(){
		this.fetch();
	}
});

