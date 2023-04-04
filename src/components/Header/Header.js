import { Button } from '../../common';
import { Logo, MovieDetail, SearchForm } from '../';

import styles from './Header.module.scss';

const SEARCH_ICON = require('../../assets/search-icon.png');

function Header({ preview, setPreview }) {
  return (
    <header className={styles.header}>
      <div className={`${styles.logoButtonWrapper} container-lg`}>
        <Logo />

        {preview ? (
          <Button className='searchButton' onClick={() => setPreview(null)}>
            <img src={SEARCH_ICON} alt='Switch to Search mode' />
          </Button>
        ) : (
          <Button className='addMovie'>+ Add Movie</Button>
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
}

export default Header;
