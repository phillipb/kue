Ember.Handlebars.helper('toAgo', function(value, options) {
  return moment(new Date(parseInt(value))).fromNow();
});
