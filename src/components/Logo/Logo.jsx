import { Link } from 'react-router-dom';

import { PATH_NAMES } from '../../config/routes';
import logo from '../../assets/logo.png';
import styles from './Logo.module.scss';

export const Logo = () => (
  <Link to={PATH_NAMES.Home}>
    <img src={logo} alt='Netflixroulette Logo' className={styles.logo} />
  </Link>
);
