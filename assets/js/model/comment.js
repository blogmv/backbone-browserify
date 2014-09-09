var Backbone = require('backbone');


module.exports =  Backbone.Model.extend({
	getAuthorName: function() {
		return this.get('author_name');
	},

	getAuthorEmail: function() {
		return this.get('author_email');
	},

	getContent: function() {
		return this.get('content');
	}	
});