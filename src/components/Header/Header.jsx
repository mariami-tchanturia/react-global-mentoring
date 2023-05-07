import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { Logo, SearchForm, MovieForm, SuccessMessage } from '../../components';
import { Button, Dialog } from '../../common';
import { addMovie } from '../../api/movieService';
import styles from './Header.module.scss';

export const Header = () => {
  const [showAddMovie, toggleAddMovie] = useState(false);
  const [showAddMovieSuccess, toggleAddMovieSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleCreate = (movie) => {
    const uuid = uuidv4();
    const hex = '0x' + uuid.replace(/-/g, '').toString();
    const id = BigInt(hex);

    const newMovie = { id, ...movie };

    addMovie(newMovie)
      .then(() => {
        toggleAddMovie(false);
        toggleAddMovieSuccess(true);
      })
      .catch((error) => setError(error));
  };

  return (
    <header className={styles.header}>
      <div className={`${styles.logoButtonWrapper} container-lg`}>
        <Logo />

        <Button className='btn--secondary' onClick={() => toggleAddMovie(true)}>
          + Add Movie
        </Button>
      </div>
      <div className='container-lg'>
        <div className='container-md'>
          <h1 className={styles.header__title}>Find your movie</h1>
          <SearchForm />
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
