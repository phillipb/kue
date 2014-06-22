var attr = DS.attr;

App.Job = DS.Model.extend({
  created_at: attr('string'),
  type: attr('string'),
  priority: attr('string'),
  state: attr('string'),
  duration: attr('string'),
  attempts: attr('raw'),
  data: attr('raw'),
  error: attr('string')
});


App.JobAdapter =  DS.RESTAdapter.extend({
  findQuery: function(store, type, query) {
    return this.ajax('/jobs/' + query.type + '/0..10/asc', 'GET');
  }
});