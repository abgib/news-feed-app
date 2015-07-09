NewsReader.Views.IndexView = Backbone.View.extend({
  initialize: function(){
    this.listenTo(this.collection, "sync", this.render);
  },

  template: JST["feeds/index"],

  render: function() {
    this.$el.html(this.template());

    this.collection.each(function(feed){
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

    this.subViews() = [];
    Backbone.View.prototype.remove.call(this);
  },

  subViews: function() {
    if (this._subViews) {
      return this._subViews;
    }

    this._subViews = [];
    return this._subViews;
  }
})
