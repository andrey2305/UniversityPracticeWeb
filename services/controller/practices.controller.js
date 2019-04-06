const db = require('../config/db.config');
const Practice = db.practices;

exports.getPractice = (req, res) => {
  Practice.findAll().then(practices => {
    const resObj = practices.map(practice => {
      return Object.assign(
        {},
        {
          id_practice: practice.id_practice,
          name: practice.name,
          address: practice.address,
          supperior_name: practice.supperior_name,
          appointment: practice.appointment,
          phone: practice.phone,
        }
      );
    });
    res.status(200).json(resObj);
  });
};

// exports.findPlaceById = (req, res) => {
//   Place.findById(req.params.id, {
//   }).then(place => {
//     const resObj = Object.assign({}, {
//       place_name: place.place_name,
//       place_address: place.place_address,
//       place_photo: Host + place.place_photo,
//       place_coords: place.place_coords,
//       place_id: place.place_id,
//     });
//     res.json(resObj);
//   });
// };

// exports.getPlacesByIdName = (req, res) => {
//   Place.findAll({
//       attributes: ['place_id', 'place_name']
//   })
//       .then(places => {
//           res.json(places);
//       })
//       .catch(err => {
//           res.status(500).json({ msg: 'error', details: err });
//       });
// };
// exports.addPlaces = (req,res) => {
//   let id;
//   Place.max('place_id').then(maxId => {
//     id = maxId + 1;
//   })
//   .then(() => {
//     Place.create({
//       place_id: id,
//       place_name: req.body.place_name,
//       place_address: req.body.place_address,
//       place_capacity: req.body.place_capacity,
//       place_contact: req.body.place_contact,
//       place_coords: req.body.place_coords,
//       place_photo: 'bartka.jpg',
//       place_type: 'bar'
//     },{
//       tableName: 'places',
//       timestamp: false
//     })
//   })
//   .then(par => console.log(par));
// }

