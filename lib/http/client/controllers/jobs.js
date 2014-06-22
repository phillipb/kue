App.JobsController = Ember.ArrayController.extend({
  needs: ['application'],
  application: Ember.computed.alias("controllers.application")

});

App.DelayedController = App.JobsController.extend();
App.ActiveController = App.JobsController.extend();
App.FailedController = App.JobsController.extend();
App.InactiveController = App.JobsController.extend();
App.CompleteController = App.JobsController.extend();
