module.exports = function (app) {
  const practice = require('../controller/practices.controller.js');
  // const places = require('../controller/place.controller.js');
  // const manager = require('../controller/manager.controller.js');

  app.get('/api/practices', practice.getPractice);

  // app.get('/api/all-events/:page', events.getSortedAllEvents);

  // app.get('/api/events/upcoming-events', events.findUpcomingEvents);

  // app.get('/api/events/top', events.findPremiumEvents);

  // app.get('/api/places/:id', places.findPlaceById);

  // app.post('/api/add-manager', manager.addManager);

  // app.get('/api/getArtists', artists.getArtists);

};

