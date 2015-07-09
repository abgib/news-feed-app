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
    this.model.entries().each(function(entry){
      var entryItemView = new NewsReader.Views.FeedEntryItem({model: entry});
      this.subViews().push(entryItemView);
      this.$(".entry-list").append(entryItemView.render().$el);
    }.bind(this))

    return this;
  },

  remove: function(){
    this.removeSubViews();
    Backbone.View.prototype.remove.call(this);
  },

  removeSubViews: function() {
    _(this.subViews()).each(function(subView) {
      subView.remove();
    });

    this._subViews = [];
  },

  subViews: function(){
    if(!this._subViews) {
      this._subViews = [];
    }

    return this._subViews;
  },

  refresh: function() {
    this.removeSubViews();
    this.model.fetch();
  }
})
