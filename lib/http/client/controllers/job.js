App.JobController = Ember.ObjectController.extend({
  _hideCode: true,
  _hideError: true,

  actions: {
    toggleCode: function() {
      this.set('_hideCode', !this._hideCode);
    },

    toggleError: function (argument) {
      this.set('_hideError', !this._hideError);
    },

    retry: function() {
      $.ajax({
         url: '/job/' + this.get('id') + '/state/active',
         type: 'PUT',
         success: function(response) {
           console.log(response)
         }
      });
    },

    retryType: function() {
      $.ajax({
         url: '/job/retry/' + this.get('type'),
         type: 'GET',
         success: function(response) {
           console.log(response)
         }
      });
    },

    remove: function() {
      $.ajax({
         url: '/job/' + this.get('id') ,
         type: 'DELETE',
         success: function(response) {
           console.log(response)
         }
      });
    }
  },

  failed: function() {
    return this.get('state') == 'failed';
  }.property('state'),

  hideCode: function() {
    return this.get('_hideCode');
  }.property('_hideCode'),

  hideError: function() {
    return this.get('_hideError');
  }.property('_hideError')
});
