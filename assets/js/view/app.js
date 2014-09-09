var Backbone = require('backbone');
var $ = require('jquery');
var _ = require('underscore');
var ArticleCollection = require('../collection/articles');

module.exports = Backbone.View.extend({  


    template: _.template( $('#tmp-article-list').html() ),

    initialize: function (options) {
        this.el = options.el;
        this.activeModel = options.model;

        this.collection = new ArticleCollection();
        this.collection.fetch();            
        this.listenTo(this.collection, 'sync', this.render);
        this.listenTo(this.collection, 'sync', this.setFirstModelAsActive);
    },

    render: function() {
        this.$el.find('.list-group').html(this.template({
            'collection' : this.collection
        }));
    },

    setFirstModelAsActive: function() {
        var index = this.collection.at(0);

        if (!index) {
            this.activeModel.clear();
            return
        }

        index = index.toJSON();
        this.activeModel.set(index);
    }
});