import styles from './SuccessMessage.module.scss';

import successIcon from '../../assets/success-icon.png';

export const SuccessMessage = () => (
  <div className={styles.successMessage}>
    <img
      src={successIcon}
      alt='Well done, you have successfully added a new movie'
      className={styles.successMessage_img}
    />
    <h1 className={styles.successMessage_title}>Congratulations</h1>
    <p className={styles.successMessage_paragraph}>
      The movie has been added to database successfully
    </p>
  </div>
);
