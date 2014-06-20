App = Ember.Application.create({
  rootElement: '#body',
  LOG_TRANSITIONS: true, // basic logging of successful transitions
  LOG_TRANSITIONS_INTERNAL: true // detailed logging of all routing steps
});

Ember.Application.initializer({
  name: 'Dependency-Injection',

  initialize: function(container, application) {
    App.register('session:current', App.Session, {singleton: true});
    App.inject('controller', 'session', 'session:current');
    App.inject('route', 'session', 'session:current');
  }
});

App.Session = Ember.Object.extend({
  currentUser: '',

  isAuthenticated: function() {
    return !!localStorage.getItem('token');
  }.property('isAuthenticated'),

  token: function() {
    return localStorage.getItem('token');
  }.property('token'),

  setToken: function(token) {
    localStorage.setItem('token', token);
    this.isAuthenticated = true;
  },

  removeToken: function() {
    localStorage.removeItem('token');
    this.isAuthenticated = false;
  }
});

