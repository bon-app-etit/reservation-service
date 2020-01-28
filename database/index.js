const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/yelp-calendar');

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('successfully connect to yelp-calendar db')
});


// Define mongoDb Schema and Model
let calendarSchema = mongoose.Schema({
  openHours: Object,
  maxPartySize: Number
});

let Calendar = mongoose.model('Calendar', calendarSchema);


// Define function to query db
const queryDb = (callback) => {
  Calendar.find({}, (err, data) => {
    if (err) {
      callback(err);
    } else {
      callback(null, data);    
    }
  });  
};

module.exports.Calendar = Calendar;
module.exports.queryDb = queryDb;