var Backbone = require('backbone');
var _ = require('underscore');
var $ = require('jquery');

module.exports = Backbone.View.extend({
	template: _.template( $('#comments').html()),
	
	events:{
		"click #postComment":"postComment"
	},
	postComment:function(){
		debugger;
	},
	initialize: function (options) {
		this.el = options.el;
		this.activeModel = options.model;
	},

	render: function() {
		this.$el.html(this.template());
	}
	
});