NewsReader.Views.IndexView = Backbone.View.extend({
  initialize: function(){
    this.listenTo(this.collection, "sync destroy", this.render);
  },

  events: {
    "click .delete" : "deleteFeedItem"
  },

  template: JST["feeds/index"],

  render: function() {
    this.$el.html(this.template());

    this.collection.each(function(feed) {
      var indexItemView = new NewsReader.Views.FeedListItemView({model: feed});
      this.subViews().push(indexItemView);
      this.$(".feed-list").append(indexItemView.render().$el);
    }.bind(this))

    return this;
  },

  remove: function() {
    _(this.subViews()).each(function(subView) {
      subView.remove()
    });

    this._subViews = [];
    Backbone.View.prototype.remove.call(this);
  },

  subViews: function() {
    if (this._subViews) {
      return this._subViews;
    }

    this._subViews = [];
    return this._subViews;
  },

  deleteFeedItem: function(event) {
    var feedListItem = this.collection.get($(event.currentTarget).data("feed-id"));
    var subView = _(this.subViews()).find(function(subView) { return subView.model === feedListItem })
    this.subViews().splice(this.subViews().indexOf(subView), 1);
    subView.remove();
    feedListItem.destroy();
  }
})
