import React from 'react';
import styles from './styles.css';

class Calendar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isDisplayed: false
    };
  }

  render() {
    return (
      <div className={styles.calendar}>
        <div className={styles.captionRow}>
          <div className={styles.arrowButton}>
            <div id={styles.leftArrow}><i className="fas fa-angle-left" /></div>
          </div>
          <div id={styles.monthYearContainer}>
            <div id={styles.monthYear}>Feb 2020</div>
          </div>
          <div className={styles.arrowButton}>
            <div id={styles.rightArrow}><i className="fas fa-angle-right" /></div>
          </div>
        </div>
        <table>
          <thead id={styles.tableHead}>
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
          <tbody id={styles.tbody}>
            <tr>
              <td className={styles.greyCell}>30</td>
              <td className={styles.filledCell} onClick={this.props.handleDayClick}>1</td>
              <td className={styles.filledCell} onClick={this.props.handleDayClick}>2</td>
              <td className={styles.filledCell} onClick={this.props.handleDayClick}>3</td>
              <td className={styles.filledCell} onClick={this.props.handleDayClick}>4</td>
              <td className={styles.filledCell} onClick={this.props.handleDayClick}>5</td>
              <td className={styles.filledCell} onClick={this.props.handleDayClick}>6</td>
            </tr>
            <tr>
              <td className={styles.filledCell} onClick={this.props.handleDayClick}>7</td>
              <td className={styles.filledCell} onClick={this.props.handleDayClick}>8</td>
              <td className={styles.filledCell} onClick={this.props.handleDayClick}>9</td>
              <td className={styles.filledCell} onClick={this.props.handleDayClick}>10</td>
              <td className={styles.filledCell} onClick={this.props.handleDayClick}>11</td>
              <td className={styles.filledCell} onClick={this.props.handleDayClick}>12</td>
              <td className={styles.filledCell} onClick={this.props.handleDayClick}>13</td>
            </tr>
            <tr>
              <td className={styles.filledCell} onClick={this.props.handleDayClick}>14</td>
              <td className={styles.filledCell} onClick={this.props.handleDayClick}>15</td>
              <td className={styles.filledCell} onClick={this.props.handleDayClick}>16</td>
              <td className={styles.filledCell} onClick={this.props.handleDayClick}>17</td>
              <td className={styles.filledCell} onClick={this.props.handleDayClick}>18</td>
              <td className={styles.filledCell} onClick={this.props.handleDayClick}>19</td>
              <td className={styles.filledCell} onClick={this.props.handleDayClick}>20</td>
            </tr>
            <tr>
              <td className={styles.filledCell} onClick={this.props.handleDayClick}>21</td>
              <td className={styles.filledCell} onClick={this.props.handleDayClick}>22</td>
              <td className={styles.filledCell} onClick={this.props.handleDayClick}>23</td>
              <td className={styles.filledCell} onClick={this.props.handleDayClick}>24</td>
              <td className={styles.filledCell} onClick={this.props.handleDayClick}>25</td>
              <td className={styles.filledCell} onClick={this.props.handleDayClick}>26</td>
              <td className={styles.filledCell} onClick={this.props.handleDayClick}>27</td>
            </tr>
            <tr>
              <td className={styles.filledCell} onClick={this.props.handleDayClick}>28</td>
              <td className={styles.filledCell} onClick={this.props.handleDayClick}>29</td>
              <td className={styles.greyCell}>1</td>
              <td className={styles.greyCell}>2</td>
              <td className={styles.greyCell}>3</td>
              <td className={styles.greyCell}>4</td>
              <td className={styles.greyCell}>5</td>
            </tr>

          </tbody>
        </table>
      </div>
    );
  }
}

export default Calendar;
