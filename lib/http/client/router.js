(function () {
  'use strict';

  App.Router.reopen({
    location: 'auto'
  });

  App.Router.map(function () {
    this.route('home', {path: '/'});
    this.route('inactive', {path: '/inactive'});
    this.route('complete', {path: '/complete'});
    this.route('failed', {path: '/failed'});
    this.route('delayed', {path: '/delayed'});
    this.route('active', {path: '/active'});
  });


  App.HomeRoute = Ember.Route.extend({
    model: function() {
      return {};
    }
  });

  App.ApplicationRoute = Ember.Route.extend({
    model: function() {
      //I need to pass a dumb ID so that it knows that there is only one
      return this.store.find('stat', 1);
    }
  })

  App.InactiveRoute = Ember.Route.extend({
    model: function() {
      return this.store.find('job', {type: 'inactive'});
    }
  });

  App.CompleteRoute = Ember.Route.extend({
    model: function() {
      return this.store.find('job', {type: 'complete'});
    }
  });

  App.FailedRoute = Ember.Route.extend({
    model: function() {
      return this.store.find('job', {type: 'failed'});
    }
  });

  App.DelayedRoute = Ember.Route.extend({
    model: function() {
      return this.store.find('job', {type: 'delayed'});
    }
  });

  App.ActiveRoute = Ember.Route.extend({
    model: function() {
      return this.store.find('job', {type: 'active'});
    }
  });

  App.IndexRoute = Ember.Route.extend({
    model: function() {
      return {name : 'Phillip Burch'};
    }
  });

})();
