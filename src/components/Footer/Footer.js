import { Logo } from '../';

import styles from './Footer.module.scss';

function Footer() {
  return (
    <footer className={styles.footer}>
      <Logo />
    </footer>
  );
}

export default Footer;
