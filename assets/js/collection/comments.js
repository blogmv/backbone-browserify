var Backbone = require('backbone');
var CommentModel = require('../model/comment');


module.exports =  Backbone.Collection.extend({
	model: CommentModel,
	url: function(){
		return "http://blogmv-api.appspot.com/api/articles/"+this.article.id+"/comments/"
	},
	initialize: function(models, options){
		this.article = options.article
	},
	postNewComment: function(model){
		debugger;
		this.create(model);
	}
});

