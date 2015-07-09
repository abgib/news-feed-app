NewsReader.Views.FeedListItemView = Backbone.View.extend({
  tagName: "li",

  className: "feed-list-item",

  render: function(){
    var content = JST["feeds/feed_list_item"]({ listItem: this.model });
    this.$el.html(content);
    return this;
  }
});
