NewsReader.Views.FeedListItemView = Backbone.View.extend({
  tagName: "li",

  className: "feed-list-item",

  template: JST["feeds/feed_list_item"],

  render: function(){
    this.$el.html(this.template({ listItem: this.model }));
    return this;
  }
});
