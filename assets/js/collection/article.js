var Backbone = require('backbone');
var ArticleModel = require('../model/article');

module.exports = Backbone.Collection.extend({
	
	url:   'http://blogmv.apiary-mock.com/api/articles',
	model: ArticleModel
});

