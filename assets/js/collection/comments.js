var Backbone = require('backbone');
var CommentModel = require('../model/comment');


module.exports =  Backbone.Collection.extend({
	model: CommentModel,
	url: function(){
		return "http://private-anon-14af1e823-blogmv.apiary-proxy.com/api/articles/"+this.article.id+"/comments"
	},
	initialize: function(models, options){
		this.article = options.article
	}
});

