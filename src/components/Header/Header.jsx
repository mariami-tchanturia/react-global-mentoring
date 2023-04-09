import { useState } from 'react';
import PropTypes from 'prop-types';

import { Button } from '../../common';
import { Logo } from '../../components/Logo//Logo';
import { MovieDetail } from '../../components/MovieDetail/MovieDetail';
import { SearchForm } from '../../components/SearchForm/SearchForm';
import { MovieForm } from '../../components/MovieForm/MovieForm';
import { Dialog } from '../../common/Dialog/Dialog';

import styles from './Header.module.scss';

import searchIcon from '../../assets/search-icon.png';

export const Header = ({ preview, setPreview }) => {
  const [showAddMovie, toggleAddMovie] = useState(false);

  return (
    <header className={styles.header}>
      <div className={`${styles.logoButtonWrapper} container-lg`}>
        <Logo />

        {preview ? (
          <Button className='btn--transparent' onClick={() => setPreview(null)}>
            <img src={searchIcon} alt='Switch to Search mode' />
          </Button>
        ) : (
          <Button
            className='btn--secondary'
            onClick={() => toggleAddMovie(true)}
          >
            + Add Movie
          </Button>
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

      {showAddMovie && (
        <Dialog
          title='Add movie'
          size='lg'
          handleClose={() => toggleAddMovie(false)}
        >
          <MovieForm />
        </Dialog>
      )}
    </header>
  );
};

Header.propTypes = {
  preview: PropTypes.object,
  setPreview: PropTypes.func,
};
