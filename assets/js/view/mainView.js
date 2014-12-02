var Backbone = require('backbone');
var $ = require('jquery');
var _ = require('underscore');


module.exports = Backbone.View.extend({  
    template: _.template( $('#tmp-article-list').html()),

    initialize: function (options) {
        this.el = options.el;
        this.activeModel = options.model;
        this.articleCollection = options.collection;
        this.articleCollection.getArticles();
        this.setUpListeners();
    },
    setUpListeners:function(){
        this.listenTo(this.articleCollection, 'sync', this.render);
        this.listenTo(this.articleCollection, 'sync', this.setFirstModelAsActive);
    },
    render: function() {
        this.$el.find('.list-group').html(this.template({
            'collection' : this.articleCollection
        }));
    },

    setFirstModelAsActive: function() {
        var index = this.articleCollection.at(0);

        if (!index) {
            this.activeModel.clear();
            return
        }

        index = index.toJSON();
        this.activeModel.set(index);
    }
});