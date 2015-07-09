NewsReader.Views.NewFeedView = Backbone.View.extend({
    template: JST["feeds/new"],

    events: {
      "submit form" : "create"
    },

    render: function(){
      this.$el.html(this.template());

      return this;
    },

    create: function(event) {
      event.preventDefault();

      var formData = $(event.currentTarget).serializeJSON();
      var newFeed = new NewsReader.Models.Feed();
      newFeed.save(formData, {
        success: function() {
          this.collection.add(newFeed);
          Backbone.history.navigate("#/feeds/" + newFeed.id);
        }.bind(this)
      });
    }
})
