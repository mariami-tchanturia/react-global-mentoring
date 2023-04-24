import { Link } from 'react-router-dom';

import styles from './Logo.module.scss';
import logo from '../../assets/logo.png';

export const Logo = () => (
  <Link to='/'>
    <img src={logo} alt='Netflixroulette Logo' className={styles.logo} />
  </Link>
);
