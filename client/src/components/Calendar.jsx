import React from 'react';
import styles from './styles.css';

class Calendar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      date: ''
    };
  }

  render() {
    return (
      <div className={styles.calendar}>
        <div className={styles.captionRow}>
          <div id={styles.leftArrow}>left</div>
          <div id={styles.monthYear}>Feb 2020</div>
          <div id={styles.rightArrow}>right</div>
        </div>
        <table>
          <thead id={styles.tableHead}>
            <tr>
              <td>Sun</td>
              <td>Mon</td>
              <td>Tue</td>
              <td>Wed</td>
              <td>Thu</td>
              <td>Fri</td>
              <td>Sat</td>
            </tr>
          </thead>
          <tbody id={styles.tbody}>
            <tr>
              <td className={styles.emptyCell} />
              <td className={styles.filledCell}>1</td>
              <td className={styles.filledCell}>2</td>
              <td className={styles.filledCell}>3</td>
              <td className={styles.filledCell}>4</td>
              <td className={styles.filledCell}>5</td>
              <td className={styles.filledCell}>6</td>
            </tr>
            <tr>
              <td className={styles.emptyCell}>7</td>
              <td className={styles.filledCell}>8</td>
              <td className={styles.filledCell}>9</td>
              <td className={styles.filledCell}>10</td>
              <td className={styles.filledCell}>11</td>
              <td className={styles.filledCell}>12</td>
              <td className={styles.filledCell}>13</td>
            </tr>
            <tr>
              <td className={styles.filledCell}>14</td>
              <td className={styles.filledCell}>15</td>
              <td className={styles.filledCell}>16</td>
              <td className={styles.filledCell}>17</td>
              <td className={styles.filledCell}>18</td>
              <td className={styles.filledCell}>19</td>
              <td className={styles.filledCell}>20</td>
            </tr>
            <tr>
              <td className={styles.filledCell}>21</td>
              <td className={styles.filledCell}>22</td>
              <td className={styles.filledCell}>23</td>
              <td className={styles.filledCell}>24</td>
              <td className={styles.filledCell}>25</td>
              <td className={styles.filledCell}>26</td>
              <td className={styles.filledCell}>27</td>
            </tr>
            <tr>
              <td className={styles.filledCell}>28</td>
              <td className={styles.filledCell}>29</td>
              <td className={styles.emptyCell} />
              <td className={styles.emptyCell} />
              <td className={styles.emptyCell} />
              <td className={styles.emptyCell} />
              <td className={styles.emptyCell} />
            </tr>

          </tbody>
        </table>
      </div>
    );
  }
}

export default Calendar;
