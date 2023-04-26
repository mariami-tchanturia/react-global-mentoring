import styles from './NotFoundPage.module.scss';

import errorImage from '../../assets/404.png';

const NotFoundPage = () => {
  return (
    <div className={styles.error}>
      <img src={errorImage} alt='Some error occured.' />
      <p className={styles.error_Text}>Page Not Found</p>
    </div>
  );
};

export default NotFoundPage;
