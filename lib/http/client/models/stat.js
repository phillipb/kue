var attr = DS.attr;

App.Stat = DS.Model.extend({
  completeCount: attr('number'),
  inactiveCount: attr('number'),
  activeCount: attr('number'),
  failedCount: attr('number'),
  delayedCount: attr('number')
});


App.StatAdapter =  DS.RESTAdapter.extend({
  find: function(store, type, query) {
    return this.ajax('/stats/', 'GET');
  }
});

// A poll to keep stats up to date. I'd like to do this via push but whatever
setInterval(function() {
  $.get('/stats', function(response) {
    App.Stat.store.update('stat', response.stats)
  })
}, 1000);