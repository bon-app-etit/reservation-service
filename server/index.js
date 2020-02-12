const express = require('express');
const cors = require('cors');
const db = require('../database/index.js');

const app = express();
const port = 3002;

const controller = require('../database/controller.js');

app.use(cors());
app.use(express.static(`${__dirname}/../client/dist`));
// eslint-disable-next-line
app.listen(port, () => { console.log(`Now listening on ${port}`); });


// Build route handlers
app.get('/reservations/', (req, res) => {
  db.queryDb((err, data) => {
    if (err) {
      // eslint-disable-next-line
      console.log('Error getting data from db ', err);
      res.status(500).send(err);
    } else {
      // eslint-disable-next-line
      console.log('Successful GET from db!');
      res.status(200).send(JSON.stringify(data));
    }
  });
});


/* for handling reservations
  create
  this should create a new reservation.
  Info needed:
  Restaurant
  User
  Number of people
  Date
  Time
*/

// create
app.post('/reserve', controller.reservations.addReservation);

// read All
app.get('/allReservations', controller.reservations.getAllReservations);

// read one reservation
app.get('/reservation/:id', controller.reservations.getOneReservation);

// update
app.put('/reservations/:id', controller.reservations.updateReservation);

// delete
app.delete('/reservations/:id', controller.reservations.deleteReservation);

// GENERAL RESTAURANT DATA
// to know if waitlist is available and when reservations are allowed
// create
app.post('/restaurant', controller.restaurants.addRestaurant);

// read
app.get('/restaurant/:id', controller.restaurants.getRestaurant);

// update
app.put('/restaurant/:id', controller.restaurants.updateRestaurant);

// delete
app.delete('/restaurant/:id', controller.restaurants.deleteRestaurant);
