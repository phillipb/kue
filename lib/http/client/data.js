//DS.RESTAdapter.reopen({
  //namespace: 'api'
//});

//App.ApplicationSerializer = DS.RESTSerializer.extend({
  //primaryKey: 'id'
//});

DS.RESTAdapter.reopen({
  headers: {
    'x-auth-token': localStorage.getItem('token') || ''
  }
});

App.RawTransform = DS.Transform.extend({
  deserialize: function(serialized) {
    return serialized;
  },
  serialize: function(deserialized) {
    return deserialized;
  }
});
