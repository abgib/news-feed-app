NewsReader.Views.FeedListItemView = Backbone.View.extend({
  render: function(){
    var content = JST["feeds/feed_list_item"]({ listItem: this.model });
    this.$el.html(content);
    return this;
  }
});
