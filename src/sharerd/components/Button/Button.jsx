import styles from '../../../modules/Feedback/Feedback.module.scss';

const Button = ({ children, onClick, type }) => {
  return (
    <button onClick={onClick} className={styles.button} type={type}>
      {children}
    </button>
  );
};

export default Button;
