import PropTypes from 'prop-types';

import { Button } from '../../common';
import { Logo, MovieDetail, SearchForm } from '..';

import styles from './Header.module.scss';

import searchIcon from '../../assets/search-icon.png';

const Header = ({ preview, setPreview }) => (
  <header className={styles.header}>
    <div className={`${styles.logoButtonWrapper} container-lg`}>
      <Logo />

      {preview ? (
        <Button className='btn--transparent' onClick={() => setPreview(null)}>
          <img src={searchIcon} alt='Switch to Search mode' />
        </Button>
      ) : (
        <Button className='btn--secondary'>+ Add Movie</Button>
      )}
    </div>

    <div className={`container-lg`}>
      {preview ? (
        <MovieDetail movie={preview} />
      ) : (
        <div className={`${styles.titleSearchWrapper} container-md`}>
          <h1 className={styles.header__title}>Find your movie</h1>
          <SearchForm
            initialSearchQuery='Initial Query'
            onSearch={(keyword) =>
              console.log(
                `Simulating search behaviour for keyword - ${keyword}`
              )
            }
          />
        </div>
      )}
    </div>
  </header>
);

Header.propTypes = {
  preview: PropTypes.object,
  setPreview: PropTypes.func,
};

export default Header;
