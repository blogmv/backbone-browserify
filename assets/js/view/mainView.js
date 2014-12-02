var Backbone = require('backbone');
var $ = require('jquery');
var _ = require('underscore');
var Template = require('./templates/articleList.hbs');


module.exports = Backbone.View.extend({  
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
        this.$el.find('#articleList').html(Template({
            'articles' : this.articleCollection.toJSON()
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