import React from 'react';
import axios from 'axios';

import styles from './styles.css';

import sampleData from '../../../database/sampleData.js';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      date: this.dateString,
      time: '7:00 pm',
      partySize: 2
    }

    this.date = new Date();
    this.dateString = this.date.toDateString();
    this.partySizes = ['1 person'];
    this.generatePartySizes(this.partySizes);

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    // this.getData();
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  generatePartySizes(array) {
    let maxSize = sampleData.maxPartySize
    for (var i = 2; i <= maxSize; i++) {
      let size = `${i} people`;
      array.push(size);
    }
  }

  getData() {
    axios.get('/api/reservations/')
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log('Error contating server! ', err);
      });
  }

  render() {
    console.log(this.date);
    return (
      <div className={styles.reservationMod} id="reservationBox">

        <div id={styles.header}>
          <h2>Make a Reservation</h2>
        </div>

        <div>
          <input id={styles.calendar} defaultValue={this.dateString}/>
        </div>

        <div id={styles.selectRow}>
            <select id={styles.time} name="time" value={this.state.time} onChange={this.handleChange}> 
              {sampleData.openHours.Mon.map((time, index) => {
                return <option value={time} key={index}>{time}</option>
              })}
            </select>

            <select id={styles.party} name="partySize" value={this.state.partySize} onChange={this.handleChange}>
              {this.partySizes.map((party, index) => {
                return <option value={party} key={index}>{party}</option>
              })}
            </select>
        </div>

        <div>
          <button id={styles.button}>Find a Table</button>
        </div>

      </div>

    );
  };
}

export default App;