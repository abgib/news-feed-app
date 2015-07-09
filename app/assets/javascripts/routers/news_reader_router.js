NewsReader.Routers.NewsReaderRouter = Backbone.Router.extend({
  initialize: function() {
    this.feeds = new NewsReader.Collections.Feeds();
  },

  routes: {
    "": "index",
    "feeds/new" : "new",
    "feeds/:id" : "show"
  },

  index: function(){
    var indexView = new NewsReader.Views.IndexView({collection: this.feeds})
    indexView.collection.fetch();
    this._swapView(indexView);
  },

  show: function(id) {
    var feed = this.feeds.getOrFetch(id);
    var showView = new NewsReader.Views.FeedsShowView({ model: feed });
    this._swapView(showView);
  },

  new: function(){
    var newView = new NewsReader.Views.NewFeedView({collection: this.feeds});
    this._swapView(newView);
  },

  _swapView: function(newView) {
    this._currentView && this._currentView.remove();
    this._currentView = newView;
    $("#content").html(this._currentView.render().$el);
  }
})
