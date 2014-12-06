var Backbone = require('backbone');
module.exports =  Backbone.Model.extend({
	setContent:function(key, value){
		this.set(key,value);
	},
	validate: function(attributes){
		debugger;
 		if (this.attributes.author_name === undefined || this.attributes.author_name === ""){
	      return 'Name is required';
	  	}

		if (this.attributes.author_email === undefined || this.attributes.author_email === ""){
	      return 'Every person must have a name.';
	  	}
	}
});