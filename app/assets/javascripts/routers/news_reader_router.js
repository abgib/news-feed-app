NewsReader.Routers.NewsReaderRouter = Backbone.Router.extend({
  initialize: function() {
    this.feeds = new NewsReader.Collections.Feeds();
  },

  routes: {
    "": "index"
  },

  index: function(){
    var indexView = new NewsReader.Views.IndexView({collection: this.feeds})
    indexView.collection.fetch();
    this._swapView(indexView);
  },

  _swapView: function(newView) {
    this._currentView && this._currentView.remove();
    this._currentView = newView;
    $("#content").html(this._currentView.render().$el);
  }

})
