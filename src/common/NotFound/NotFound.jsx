import styles from './NotFound.module.scss';

import errorImage from '../../assets/404.png';

export const NotFound = () => {
  return (
    <div className={styles.error}>
      <img src={errorImage} alt='Some error occured.' />
      <p className={styles.error_Text}>Page Not Found</p>
    </div>
  );
};
