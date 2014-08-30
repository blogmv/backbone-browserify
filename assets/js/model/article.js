var Backbone= require('backbone');
var CommentCollection = require('../collection/comment');


module.exports =  Backbone.Model.extend({
    initialize: function(){
        this.comments = new CommentCollection([], {
            "article": this
        });
    },

    getTitle: function() {
        return this.get('title');
    },

    getContent: function() {
        return this.get('content');
    }
});
