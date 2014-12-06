var Backbone = require('backbone'),
    $ = require('jquery'),
    Template = require('./templates/articleList.hbs');


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
        
    },
    render: function() {
        this.$el.find('#articleList').html(Template({
            'articles' : this.articleCollection.toJSON()
        }));
    }
});