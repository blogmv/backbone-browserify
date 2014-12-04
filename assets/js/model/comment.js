var Backbone = require('backbone');
module.exports =  Backbone.Model.extend({
	defaults:{
		articleId:''
	},
	url: function(){
		return "http://blogmv-api.appspot.com/api/articles/"+this.get("articleId")+"/comments/";
	},
	getAuthorName: function() {
		return this.get('author_name');
	},

	getAuthorEmail: function() {
		return this.get('author_email');
	},
	setArticleId:function(id){
		this.set("articleId",id);
	},
	getContent: function() {
		return this.get('content');
	},
	setContent:function(key, value){
		this.set(key,value);
	},
	postComment:function() {
		var forceValidation = true
		if (this.isValid(forceValidation)){			
			this.save();
		}
	},
	validate: function(attributes){
 		if (attributes.name === ""){
	      return 'Name is required';
	  	}

		if (attributes.email === ""){
	      return 'Every person must have a name.';
	  	}
	}
});