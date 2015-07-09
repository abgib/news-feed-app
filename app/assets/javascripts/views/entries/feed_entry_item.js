NewsReader.Views.FeedEntryItem = Backbone.View.extend({
  template: JST["entries/feed_entry_item"],

  render: function() {
    var content = this.template({entry: this.model});
    this.$el.html(content);
    return this;
  }
})
