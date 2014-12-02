var Backbone = require('backbone');
var ArticleModel = require('../model/article');

module.exports = Backbone.Collection.extend({
	
	url:   'http://private-anon-14af1e823-blogmv.apiary-proxy.com/api/articles',
	model: ArticleModel,
	getArticles:function(){
		this.fetch();
	}
});

