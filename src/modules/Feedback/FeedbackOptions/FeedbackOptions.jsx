import Button from 'sharerd/components/Button/Button';
import styles from '../Feedback.module.scss';

const FeedbackOptions = ({ onLeaveFeedback }) => {
  return (
    <>
      <Button onClick={() => onLeaveFeedback('good')} type="button">
        Good
      </Button>
      <Button onClick={() => onLeaveFeedback('neutral')} type="button">
        Neutral
      </Button>
      <Button onClick={() => onLeaveFeedback('bad')} type="button">
        Bad
      </Button>
    </>
  );
};

export default FeedbackOptions;
