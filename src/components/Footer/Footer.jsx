import { Logo } from '..';

import styles from './Footer.module.scss';

const Footer = () => (
  <footer className={styles.footer}>
    <Logo />
  </footer>
);

export default Footer;
