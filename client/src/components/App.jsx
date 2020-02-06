import React from 'react';
import axios from 'axios';
import Calendar from './Calendar.jsx';

import styles from './styles.css';

import sampleData from '../../../database/sampleData';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      date: this.dateString,
      time: '7:00 pm',
      partySize: '2 people',
      displayCalendar: false,
      dateUTC: new Date(),
      dayOfWeek: null,
      restaurantData: null,
    };

    this.date = new Date();
    this.dateString = this.date.toDateString();
    this.dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    this.partySizes = ['1 person'];

    this.handleChange = this.handleChange.bind(this);
    this.handleDayClick = this.handleDayClick.bind(this);
    this.displayCalendar = this.displayCalendar.bind(this);
  }

  componentDidMount() {
    this.setState({
      dateUTC: new Date(),
      date: this.date.toDateString(),
      dayOfWeek: this.date.getDay(),
    });
    this.getData();
  }

  static onMouseDown(event) {
    // eslint-disable-next-line no-param-reassign
    event.target.style.background = '#be2020';
  }

  getData() {
    axios.get('/reservations/')
      .then((response) => {
        const dayOfWeek = this.date.getDay();
        console.log(response.data, response.data.openHours, this.dayNames, dayOfWeek);
        const dayTimes = response.data.openHours[this.dayNames[dayOfWeek]];
        this.setState({
          restaurantData: response.data,
          time: dayTimes.includes('7:00 pm') ? '7:00 pm' : dayTimes[5],
        });
        return response;
      })
      .then(() => {
        this.generatePartySizes(this.partySizes);
      })
      .catch((err) => {
        console.log('Error contating server! ', err);
      });
  }

  generatePartySizes(array) {
    const { restaurantData } = this.state;
    const maxSize = restaurantData.maxPartySize;
    for (let i = 2; i <= maxSize; i += 1) {
      const size = `${i} people`;
      array.push(size);
    }
    this.setState({
      partySize: '2 people',
    });
  }

  displayCalendar() {
    const {
      displayCalendar,
    } = this.state;
    this.setState({
      displayCalendar: !displayCalendar,
    });
  }


  handleDayClick(event) {
    let month = Number(event.target.getAttribute('month')) + 1;
    const year = event.target.getAttribute('year');
    let day = event.target.getAttribute('day');
    if (day < 10) {
      day = `0${day}`;
    }
    if (month < 10) {
      month = `0${month}`;
    }
    const dateUTC = new Date(`${year}-${month}-${day}T10:20:30Z`);
    const dateString = dateUTC.toDateString();
    this.setState({
      date: dateString,
      displayCalendar: false,
      dateUTC,
      dayOfWeek: dateUTC.getDay(),
    });
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }


  render() {
    const {
      date, time, partySize, displayCalendar, dateUTC, dayOfWeek, restaurantData,
    } = this.state;
    return (
      <div className={styles.reservationMod} id="reservationBox">
        <div>
          <h2 id={styles.header}>Make a Reservation</h2>
        </div>
        <div>
          <input
            id={styles.calendarSelect}
            defaultValue={this.dateString}
            value={date}
            onClick={this.displayCalendar}
            readOnly
          />
        </div>
        <div id={styles.selectRow}>
          <select id={styles.time} name="time" value={time} onChange={this.handleChange}>
            {restaurantData && restaurantData.openHours[this.dayNames[dayOfWeek]].map((resTime) => (
              <option
                value={resTime}
                key={resTime}
              >
                {resTime}
              </option>
            ))}
          </select>
          <select id={styles.party} name="partySize" value={partySize} onChange={this.handleChange}>
            {this.partySizes && this.partySizes.map((party) => (
              <option
                value={party}
                key={party}
              >
                {party}
              </option>
            ))}
          </select>
        </div>
        <div>
          <button id={styles.button} type="button" onMouseDown={App.onMouseDown}>Find a Table</button>
        </div>
        <div>
          {displayCalendar ? (
            <Calendar
              selectedDate={dateUTC}
              openHours={restaurantData.openHours}
              dayNames={this.dayNames}
              handleDayClick={this.handleDayClick}
            />
          ) : null}
        </div>
      </div>

    );
  }
}

export default App;
