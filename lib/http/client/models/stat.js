var attr = DS.attr;

App.Stat = DS.Model.extend({
  completeCount: attr('number'),
  inactiveCount: attr('number'),
  activeCount: attr('number'),
  failedCount: attr('number'),
  delayedCount: attr('number')
});


/*App.StatsAdapter =  DS.RESTAdapter.extend({
  findQuery: function(store, type, query) {
    return this.ajax('/stats/', 'GET');
  }
});*/