import { useState } from 'react';
import PropTypes from 'prop-types';

import { v4 as uuidv4 } from 'uuid';

import { Button } from '../../common';
import { Logo } from '../../components/Logo//Logo';
import { SearchForm } from '../../components/SearchForm/SearchForm';
import { MovieForm } from '../../components/MovieForm/MovieForm';
import { SuccessMessage } from '../../components/SuccessMessage/SuccessMessage';
import { Dialog } from '../../common/Dialog/Dialog';

import styles from './Header.module.scss';

export const Header = () => {
  const [showAddMovie, toggleAddMovie] = useState(false);
  const [showAddMovieSuccess, toggleAddMovieSuccess] = useState(false);

  const handleCreate = (movie) => {
    const id = uuidv4();
    const newMovie = { id, ...movie };

    console.log('Simulating Movie Creation');
    console.log(`This should be new movie: `, newMovie);

    toggleAddMovie(false);
    toggleAddMovieSuccess(true);
  };

  return (
    <header className={styles.header}>
      <div className={`${styles.logoButtonWrapper} container-lg`}>
        <Logo />

        <Button className='btn--secondary' onClick={() => toggleAddMovie(true)}>
          + Add Movie
        </Button>
      </div>
      <div className={`container-lg`}>
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
      </div>

      {showAddMovie && (
        <Dialog
          title='Add movie'
          size='lg'
          handleClose={() => toggleAddMovie(false)}
        >
          <MovieForm handleSubmit={handleCreate} />
        </Dialog>
      )}

      {showAddMovieSuccess && (
        <Dialog size='sm' handleClose={() => toggleAddMovieSuccess(false)}>
          <SuccessMessage />
        </Dialog>
      )}
    </header>
  );
};

Header.propTypes = {
  preview: PropTypes.object,
  setPreview: PropTypes.func,
};
