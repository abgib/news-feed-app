NewsReader.Views.FeedsShowView = Backbone.View.extend({

  initialize: function() {
    this.listenTo(this.model, "sync", this.render);
  },

  events: {
    "click .refresh" : "refresh"
  },

  template: JST["feeds/show"],

  render: function() {
    var content = this.template({feed: this.model });
    this.$el.html(content);
    return this;
  },

  refresh: function() {
    this.model.fetch();
  }
})
