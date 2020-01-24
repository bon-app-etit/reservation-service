const db = require('./index.js');

const seedDb = () => {
  for (var i = 0; i < 100; i++) {

    // Create a template object for business hours
    let businessHours = {
      Sun: null,
      Mon: null,
      Tue: null,
      Wed: null,
      Thu: null,
      Fri: null,
      Sat: null
    };

    // Generate scenarios of business hours
    

    // Generate a random party size number between 1 and 8
    let randomPartySize = Math.floor((Math.random() * 8) + 1);

    // Create new instance of Calendar model
    let calendarData = new db.Calendar({
      openHours: businessHours,
      maxPartySize: randomPartySize
    });

    // Save data to db
    calendarData.save((err, data) => {
      if (err) {
        console.log('Error saving calendar data to db!');
      } else {
        console.log('Success saving calendar data to db');
      }
    });
  }
}