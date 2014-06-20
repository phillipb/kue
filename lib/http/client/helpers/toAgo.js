Ember.Handlebars.helper('toAgo', function(value, options) {
  return moment(value).fromNow();
});
