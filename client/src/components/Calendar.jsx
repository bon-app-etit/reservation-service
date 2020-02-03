/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import styles from './styles.css';

class Calendar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      year: this.props.currentDate.getFullYear(),
      month: this.props.currentDate.getMonth(),
    };

    this.monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July',
      'August', 'September', 'October', 'November', 'December'];
  }

  generateCalendar(year, month) {
    const firstDayOfMonth = new Date(year, month).getDay();
    const numOfDays = 32 - new Date(year, month, 32).getDate();

    const numOfDaysPrev = 32 - new Date(year, month - 1, 32).getDate();
    const lastDayofPrevMonth = new Date(year, month - 1, numOfDaysPrev).getDay();

    let date = 1;
    const calendarRows = [];

    for (let r = 0; r < 5; r += 1) {
      const daysInRow = [];

      for (let i = 0; i < 7; i += 1) {
        if (r === 0 && i < firstDayOfMonth) {
          const prevDate = numOfDaysPrev - (lastDayofPrevMonth - i);
          const greyCell = <td className={styles.greyCell} key={`prev${prevDate}`}>{prevDate}</td>;
          daysInRow.push(greyCell);
        } else if (date > numOfDays) {
          const nextDate = date - numOfDays;
          const greyCell = <td className={styles.greyCell} key={`next${nextDate}`}>{nextDate}</td>;
          daysInRow.push(greyCell);
          date += 1;
        } else {
          const filledCell = <td className={styles.filledCell} key={`current${date}`} onClick={this.props.handleDayClick}>{date}</td>;
          daysInRow.push(filledCell);
          date += 1;
        }
      }
      calendarRows.push(daysInRow);
    }
    return calendarRows;
  }

  handleLeftArrowClick(event) {
    if (this.state.month !== 0) {
      this.setState({
        month: this.state.month - 1,
      });
    } else {
      this.setState({
        year: this.state.year - 1,
        month: 11,
      });
    }
  }

  handleRightArrowClick(event) {
    if (this.state.month !== 11) {
      this.setState({
        month: this.state.month + 1,
      });
    } else {
      this.setState({
        year: this.state.year + 1,
        month: 0,
      });
    }
  }

  render() {
    const calendarPage = this.generateCalendar(this.state.year, this.state.month);
    return (
      <div className={styles.calendar}>
        <div className={styles.captionRow}>
          <div className={styles.arrowButton}>
            <div className={styles.leftArrow} onClick={this.handleLeftArrowClick.bind(this)}><i className="fas fa-angle-left" /></div>
          </div>
          <div className={styles.monthYearContainer}>
            <div className={styles.monthYear}>{this.monthNames[this.state.month]} {this.state.year}</div>
          </div>
          <div className={styles.arrowButton}>
            <div className={styles.rightArrow} onClick={this.handleRightArrowClick.bind(this)}><i className="fas fa-angle-right" /></div>
          </div>
        </div>
        <table>
          <thead className={styles.tableHead}>
            <tr>
              <td className={styles.weekday}>Su</td>
              <td className={styles.weekday}>Mo</td>
              <td className={styles.weekday}>Tu</td>
              <td className={styles.weekday}>We</td>
              <td className={styles.weekday}>Th</td>
              <td className={styles.weekday}>Fr</td>
              <td className={styles.weekday}>Sa</td>
            </tr>
          </thead>
          <tbody className={styles.tbody} id="tbody">
            <tr>
              {calendarPage[0].map((day) => day)}
              {/* <td className={styles.greyCell}>30</td>
              <td className={styles.filledCell} onClick={this.props.handleDayClick}>1</td>
              <td className={styles.filledCell} onClick={this.props.handleDayClick}>2</td>
              <td className={styles.filledCell} onClick={this.props.handleDayClick}>3</td>
              <td className={styles.filledCell} onClick={this.props.handleDayClick}>4</td>
              <td className={styles.filledCell} onClick={this.props.handleDayClick}>5</td>
              <td className={styles.filledCell} onClick={this.props.handleDayClick}>6</td> */}
            </tr>
            <tr>
              {calendarPage[1].map((day) => day)}
              {/* <td className={styles.filledCell} onClick={this.props.handleDayClick}>7</td>
              <td className={styles.filledCell} onClick={this.props.handleDayClick}>8</td>
              <td className={styles.filledCell} onClick={this.props.handleDayClick}>9</td>
              <td className={styles.filledCell} onClick={this.props.handleDayClick}>10</td>
              <td className={styles.filledCell} onClick={this.props.handleDayClick}>11</td>
              <td className={styles.filledCell} onClick={this.props.handleDayClick}>12</td>
              <td className={styles.filledCell} onClick={this.props.handleDayClick}>13</td> */}
            </tr>
            <tr>
              {calendarPage[2].map((day) => day)}
              {/* <td className={styles.filledCell} onClick={this.props.handleDayClick}>14</td>
              <td className={styles.filledCell} onClick={this.props.handleDayClick}>15</td>
              <td className={styles.filledCell} onClick={this.props.handleDayClick}>16</td>
              <td className={styles.filledCell} onClick={this.props.handleDayClick}>17</td>
              <td className={styles.filledCell} onClick={this.props.handleDayClick}>18</td>
              <td className={styles.filledCell} onClick={this.props.handleDayClick}>19</td>
              <td className={styles.filledCell} onClick={this.props.handleDayClick}>20</td> */}
            </tr>
            <tr>
              {calendarPage[3].map((day) => day)}
              {/* <td className={styles.filledCell} onClick={this.props.handleDayClick}>21</td>
              <td className={styles.filledCell} onClick={this.props.handleDayClick}>22</td>
              <td className={styles.filledCell} onClick={this.props.handleDayClick}>23</td>
              <td className={styles.filledCell} onClick={this.props.handleDayClick}>24</td>
              <td className={styles.filledCell} onClick={this.props.handleDayClick}>25</td>
              <td className={styles.filledCell} onClick={this.props.handleDayClick}>26</td>
              <td className={styles.filledCell} onClick={this.props.handleDayClick}>27</td> */}
            </tr>
            <tr>
              {calendarPage[4].map((day) => day)}
              {/* <td className={styles.filledCell} onClick={this.props.handleDayClick}>28</td>
              <td className={styles.filledCell} onClick={this.props.handleDayClick}>29</td>
              <td className={styles.greyCell}>1</td>
              <td className={styles.greyCell}>2</td>
              <td className={styles.greyCell}>3</td>
              <td className={styles.greyCell}>4</td>
              <td className={styles.greyCell}>5</td> */}
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Calendar;
