'use strict';
module.exports = function(app) {
  var loot = require('../controllers/lootController');

  // todoList Routes
  app.route('/loot')
    .get(loot.getLoot)
};