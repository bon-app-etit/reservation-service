/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import styles from './styles.css';

class Calendar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      year: this.props.selectedDate.getFullYear(),
      month: this.props.selectedDate.getMonth(),
    };

    this.monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July',
      'August', 'September', 'October', 'November', 'December'];

    this.closedDaysIndex = [];
    for (let i = 0; i < this.props.dayNames.length; i += 1) {
      if (this.props.openHours[this.props.dayNames[i]].length === 0) {
        this.closedDaysIndex.push(i);
      }
    }

    this.currentDate = new Date();
    this.currentDay = this.currentDate.getDate();
    this.currentMonth = Number(this.currentDate.getMonth());
    this.currentYear = this.currentDate.getFullYear();

    this.handleLeftArrowClick = this.handleLeftArrowClick.bind(this);
    this.handleRightArrowClick = this.handleRightArrowClick.bind(this);
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
          if (month === this.currentMonth || this.closedDaysIndex.includes(i)) {
            const greyCell = <td className={styles.greyCell} key={`prev${prevDate}`}>{prevDate}</td>;
            daysInRow.push(greyCell);
          } else {
            let prevMonth = month - 1;
            let prevYear = year;
            if (month === 0) {
              prevMonth = 11;
              prevYear = year - 1;
            }
            const futureGreyCell = (
              <td
                className={styles.futureGreyCell}
                key={`next${prevDate}`}
                month={prevMonth}
                year={prevYear}
                day={prevDate}
                onClick={this.props.handleDayClick}
              >
                {prevDate}
              </td>
            );
            daysInRow.push(futureGreyCell);
          }
        } else if (date > numOfDays) {
          const nextDate = date - numOfDays;
          let nextMonth = month + 1;
          let nextYear = year;
          if (month === 11) {
            nextMonth = 0;
            nextYear = year + 1;
          }
          const futureGreyCell = (
            <td
              className={styles.futureGreyCell}
              key={`next${nextDate}`}
              month={nextMonth}
              year={nextYear}
              day={nextDate}
              onClick={this.props.handleDayClick}
            >
              {nextDate}
            </td>
          );
          daysInRow.push(futureGreyCell);
          date += 1;
        } else {
          if (this.closedDaysIndex.includes(i)) {
            const greyCell = <td className={styles.greyCell} key={`current${date}`}>{date}</td>;
            daysInRow.push(greyCell);
          } else if (month === this.currentMonth && date < this.currentDay) {
            const greyCell = <td className={styles.greyCell} key={`current${date}`}>{date}</td>;
            daysInRow.push(greyCell);
          } else {
            const day = date < 10 ? `0${date}` : date;
            let calendarMonth = Number(month) + 1;
            calendarMonth = calendarMonth < 10 ? `0${calendarMonth}` : calendarMonth;
            const dateString = (new Date(`${year}-${calendarMonth}-${day}T10:20:30Z`)).toDateString();
            const filledCell = (
              <td
                className={dateString === this.props.selectedDate.toDateString() ? styles.selectedCell : styles.filledCell}
                key={`current${date}`}
                month={month}
                year={year}
                day={date}
                onClick={this.props.handleDayClick}
              >
                {date}
              </td>
            );
            daysInRow.push(filledCell);
          }
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
            {(this.state.year > this.currentYear || this.state.month > this.currentMonth)
              ? <div className={styles.leftArrow} onClick={this.handleLeftArrowClick}><i className="fas fa-angle-left" /></div>
              : <div />}
          </div>
          <div className={styles.monthYearContainer}>
            <div className={styles.monthYear}>
              {this.monthNames[this.state.month]}
              {' '}
              {this.state.year}
            </div>
          </div>
          <div className={styles.arrowButton}>
            <div className={styles.rightArrow} onClick={this.handleRightArrowClick}><i className="fas fa-angle-right" /></div>
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
            </tr>
            <tr>
              {calendarPage[1].map((day) => day)}
            </tr>
            <tr>
              {calendarPage[2].map((day) => day)}
            </tr>
            <tr>
              {calendarPage[3].map((day) => day)}
            </tr>
            <tr>
              {calendarPage[4].map((day) => day)}
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Calendar;
