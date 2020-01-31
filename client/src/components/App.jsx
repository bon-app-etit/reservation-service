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
    };

    this.date = new Date();
    this.dateString = this.date.toDateString();

    this.partySizes = ['1 person'];
    this.generatePartySizes(this.partySizes);

    this.handleChange = this.handleChange.bind(this);
    this.handleDayClick = this.handleDayClick.bind(this);
    this.displayCalendar = this.displayCalendar.bind(this);
  }

  componentDidMount() {
    // this.getData();
  }

  getData() {
    axios.get('/api/reservations/')
      .then(response => {
        console.log(response);
      })
      .catch(err => {
        console.log('Error contating server! ', err);
      });
  }

  generatePartySizes(array) {
    let maxSize = sampleData.maxPartySize
    for (var i = 2; i <= maxSize; i++) {
      let size = `${i} people`;
      array.push(size);
    }
  }

  displayCalendar() {
    this.setState({
      displayCalendar: !this.state.displayCalendar,
    });
  }

  handleDayClick(event) {
    let day = event.target.innerText;
    if (day < 10) {
      day = `0${day}`;
    }
    const dateUTC = new Date(`2020-02-${day}T10:20:30Z`);
    const dateString = dateUTC.toDateString();
    this.setState({
      date: dateString,
      displayCalendar: false,
    });
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  render() {
    return (
      <div className={styles.reservationMod} id="reservationBox">

        <div>
          <h2 id={styles.header}>Make a Reservation</h2>
        </div>

        <div>
          <input id={styles.calendarSelect} defaultValue={this.dateString} value={this.state.date} onClick={this.displayCalendar} />
        </div>

        <div id={styles.selectRow}>
          <select id={styles.time} name="time" value={this.state.time} onChange={this.handleChange}>
            {sampleData.openHours.Mon.map((time, index) => <option value={time} key={index}>{time}</option>)}
          </select>

          <select id={styles.party} name="partySize" value={this.state.partySize} onChange={this.handleChange}>
            {this.partySizes.map((party, index) => <option value={party} key={index}>{party}</option>)}
          </select>

        </div>

        <div>
          <button id={styles.button}>Find a Table</button>
        </div>

        <div>
          {this.state.displayCalendar ? <Calendar handleDayClick={this.handleDayClick} /> : null}
        </div>

      </div>

    );
  };
}

export default App;
