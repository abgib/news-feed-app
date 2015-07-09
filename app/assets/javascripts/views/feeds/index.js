NewsReader.Views.IndexView = Backbone.View.extend({
  initialize: function(){
    this.listenTo(this.collection, "sync", this.render),
    this.collection.fetch();
  },

  render: function() {
    var content = JST["feeds/index"];

    this.$el.html(content)

    this.collection.each(function(feed){
      var indexItemView = new NewsReader.Views.FeedListItemView({model: feed});
      this.$(".feed-list").append(indexItemView.render().$el);
    }.bind(this))

    return this;
  }
})
