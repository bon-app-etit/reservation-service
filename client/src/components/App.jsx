import React from 'react';
import axios from 'axios';

import styles from './styles.css';

import sampleData from '../../../database/sampleData.js';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      date: '',
      time: '7:00 pm',
      partySize: 2
    }

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    // this.getData();
  }

  handleChange(event) {
    this.setState({
      time: event.target.value
    })
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

    console.log(sampleData.openHours.Mon);
    return (

      <div className={styles.reservationMod} id="reservationBox">

        <div className={styles.reservationMod} id="header">
          <h2>Make a Reservation</h2>
        </div>

        <div className={styles.reservationMod} id="calendar">
          <input />
        </div>

        <div className={styles.reservationMod} id="selectRow">
            <select value={this.state.time} onChange={this.handleChange}> 
              {sampleData.openHours.Mon.map((time, index) => {
                  return <option value={time} key={index}>{time}</option>
              })}
            </select>
            <select />
        </div>

      </div>

    );
  };
}

export default App;