import styles from './Logo.module.scss';

const LOGO = require('../../assets/logo.png');

const Logo = () => (
  <img src={LOGO} alt='Netflixroulette Logo' className={styles.logo} />
);

export default Logo;
