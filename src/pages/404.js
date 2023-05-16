import Image from 'next/image';
import Images from '../assets/images';
import styles from '../styles/404.module.scss';

const NotFoundPage = () => {
  return (
    <div className={styles.error}>
      <Image src={Images.notFound} alt='Some error occured.' quality={100} />
      <p className={styles.error_text}>Not Found</p>
    </div>
  );
};

export default NotFoundPage;
