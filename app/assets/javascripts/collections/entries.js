NewsReader.Collections.Entries = Backbone.Collection.extend({

  initialize: function(model, options) {
    this.feed = options.feed;
  },

  url: function() {
    return this.feed.url() + '/entries'
  },

  model: NewsReader.Models.Entry
})
