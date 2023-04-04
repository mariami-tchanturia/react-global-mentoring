import styles from './Logo.module.scss';

import logo from '../../assets/logo.png';

const Logo = () => (
  <img src={logo} alt='Netflixroulette Logo' className={styles.logo} />
);

export default Logo;
