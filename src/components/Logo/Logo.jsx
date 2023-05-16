import Link from 'next/link';
import Image from 'next/image';
import Images from '../../assets/images';

import { PATH_NAMES } from '../../routes/contants';
import styles from './Logo.module.scss';

export const Logo = () => (
  <Link href={PATH_NAMES.Home}>
    <Image
      src={Images.logo}
      alt='Netflixroulette Logo'
      className={styles.logo}
    />
  </Link>
);
