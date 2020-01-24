const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/yelp-calendar');

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('successfully connect to yelp-calendar db')
});

let calendarSchema = mongoose.Schema({
  openHours: Object,
  maxPartySize: Number
});

let Calendar = mongoose.model('Calendar', calendarSchema);

module.exports.Calendar = Calendar;