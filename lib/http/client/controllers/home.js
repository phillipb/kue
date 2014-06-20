App.HomeController = Ember.ObjectController.extend({

  actions: {
    removeFirstItem: function() {
      this.objectAtContent(0).destroyRecord();
    }
  },

  total: function (argument) {
    return this.get('length');
  }.property('@each')

});
