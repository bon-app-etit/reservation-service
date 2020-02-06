const db = require('./index.js');

const seedDb = () => {
  for (let i = 0; i < 100; i += 1) {

    // Create a template objects for business hours
    const businessHours = {
      Sun: [],
      Mon: [],
      Tue: [],
      Wed: [],
      Thu: [],
      Fri: [],
      Sat: [],
    };

    // Create scenarios of business hours
    const breakfast = ['8:00 am', '8:30 am', '9:00 am', '9:30 am', '10:00 am', '10:30 am'];
    const lunch = ['11:00 am', '11:30 am', '12:00 pm', '12:30 pm', '1:00 pm', '1:30 pm', '2:00 pm', '2:30 pm'];
    const dinner = ['5:00 pm', '5:30 pm', '6:00 pm', '6:30 pm', '7:00 pm', '7:30 pm', '8:00 pm', '8:30 pm', '9:00 pm', '9:30 pm', '10:00 pm', '10:30 pm'];

    // True-biased true-false generator
    const generateBool = () => (Math.random() >= 0.3);

    // Generate random businessHours data
    const isClosedBreakfast = generateBool();
    const isOpenLunch = generateBool();
    let isOpenDinner = generateBool();
    const isClosedSundays = generateBool();
    const isClosedMondays = generateBool();

    // Apply randomization of hours
    if (isClosedBreakfast === true && isOpenLunch === false && isOpenDinner === false) {
      isOpenDinner = true;
    }

    if (!isClosedBreakfast) {
      for (day in businessHours) {
        businessHours[day] = businessHours[day].concat(breakfast);
      }
    }
    if (isOpenLunch) {
      for (day in businessHours) {
        businessHours[day] = businessHours[day].concat(lunch);
      }
    }
    if (isOpenDinner) {
      for (day in businessHours) {
        businessHours[day] = businessHours[day].concat(dinner);
        let closesEarly = generateBool();
        if (!closesEarly) {
          businessHours[day].splice(businessHours[day].length-2, 2);
        }
      }
    }
    if (isClosedSundays) {
      businessHours.Sun = [];
    }
    if (isClosedMondays) {
      businessHours.Mon = [];
    }

    // Generate a random party size number between 4 and 8 in increments of 2
    const randomPartySize = Math.floor((Math.random() * 3) + 2) * 2;

    // Create new instance of Calendar model
    const calendarData = new db.Calendar({
      openHours: businessHours,
      maxPartySize: randomPartySize,
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
};

// UNCOMMENT FUNCTION BELOW AND RUN TO SEED DATABASE
seedDb();
