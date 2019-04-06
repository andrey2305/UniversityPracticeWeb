module.exports = function (app) {
  const practices = require('../controller/practices.controller.js');

  app.get('/api/practices', practices.getPractice);

};

