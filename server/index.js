const express = require('express');
const axios = require('axios');
const db = require('../database/index.js')

const app = express();
const port = 3000;

app.use(express.static(__dirname + '/../client/dist'));
app.listen(port, () => { console.log(`Now listening on ${port}`) });


// Build route handlers
app.get('/api/reservations/', (req, res) => {
  db.queryDb((err, data) => {
    if (err) {
      console.log('Error getting data from db ', err);
      res.status(500).send(err);
    } else {
      console.log('Successful GET from db!');
      res.status(200).send(data);
    }
  });
})