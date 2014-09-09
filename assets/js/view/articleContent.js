var Backbone = require('backbone');
var _ = require('underscore');
var $ = require('jquery');

module.exports = Backbone.View.extend({
	template: _.template( $('#tmp-article-content').html() ),
	
	
	initialize: function (options) {
		this.el = options.el;
		this.activeModel = options.model;
		this.listenTo(this.activeModel, 'change', this.render);
	},

	render: function() {
		this.$el.find('article').html(this.template({
			'activeModel' : this.activeModel
		}));
	}
	
});