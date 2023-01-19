import styles from '../Feedback.module.scss';

const Section = ({ children, title }) => {
  return (
    <div className={styles.block}>
      <h2 className={styles.blockTitle}>{title}</h2>
      {children}
    </div>
  );
};

export default Section;
