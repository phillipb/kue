/*
 * Service that modifies and changes currentbuild
 */

var fs = require('fs');

var service = {
  getConfig: function() {
    return require('../currentbuild.json');
  },

  saveConfig: function(config) {
    fs.writeFileSync('../currentbuild.json', JSON.stringify(config));
  }
};

// Make class a singleton
module.exports = service;