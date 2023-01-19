import { Component } from 'react';
import styles from './Feedback.modules.scss';

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  }

  countPositiveFeedbackPercentage(propName) {
    const total = this.countTotalFeedback();
    if (!total) {
      return 0;
    }
    const value = this.state[propName];
    const result = ((value / total) * 100).toFixed(2);
    return Number(result);
  }

  getVoteGood = () => {
    this.setState(prevState => {
      console.log(prevState);
      return { good: prevState.good + 1 };
    });
  };

  getVoteNeutral = () => {
    this.setState(prevState => {
      console.log(prevState);
      return { neutral: prevState.neutral + 1 };
    });
  };

  getVoteBad = () => {
    this.setState(prevState => {
      console.log(prevState);
      return { bad: prevState.bad + 1 };
    });
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const goodParcentage = this.countPositiveFeedbackPercentage('good');

    return (
      <div>
        <h1 className={styles.title}>Feedback Form</h1>
        <div className={styles.wrapper}>
          <div className={styles.block}>
            <h2 className={styles.blockTitle}>Please leave feedback</h2>
            <button onClick={this.getVoteGood} className={styles.button}>
              Good
            </button>
            <button onClick={this.getVoteNeutral} className={styles.button}>
              Neutral
            </button>
            <button onClick={this.getVoteBad} className={styles.button}>
              Bad
            </button>
          </div>
          <div className={styles.block}>
            <h2 className={styles.blockTitle}>Statistics</h2>
            <p className={styles.statisitcsVote}>Good: {good}</p>
            <p className={styles.statisitcsVote}>Neutral: {neutral}</p>
            <p className={styles.statisitcsVote}>Bad: {bad}</p>
            <p className={styles.statisitcsVote}>Total: {total}</p>
            <p className={styles.statisitcsVote}>
              Positive feedback: {goodParcentage}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Feedback;
