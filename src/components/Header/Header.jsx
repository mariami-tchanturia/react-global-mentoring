import { Link, Outlet } from 'react-router-dom';

import { Logo, SearchForm } from '../../components';
import { PATH_NAMES } from '../../routes/contants';
import styles from './Header.module.scss';

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={`${styles.logoButtonWrapper} container-lg`}>
        <Logo />

        <Link to={PATH_NAMES.AddMovie} className={styles.btnLink}>
          + Add Movie
        </Link>
      </div>
      <div className='container-lg'>
        <div className='container-md'>
          <h1 className={styles.header__title}>Find your movie</h1>
          <SearchForm />
        </div>
      </div>

      <Outlet />
    </header>
  );
};
