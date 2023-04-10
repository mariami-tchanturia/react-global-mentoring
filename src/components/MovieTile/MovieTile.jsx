import { useState } from 'react';
import PropTypes from 'prop-types';

import { MovieMenu } from '../../components/MovieMenu/MovieMenu';
import { DeleteConfirmation } from '../../components/DeleteConfirmation/DeleteConfirmation';
import { MovieForm } from '../MovieForm/MovieForm';
import { Dialog } from '../../common';

import { formatGenres } from '../../helpers/formatGenres';

import styles from './MovieTile.module.scss';

export const MovieTile = ({ movie, setActiveMovie }) => {
  const [showEditMovie, toggleEditMovie] = useState(false);
  const [showDeleteMovie, toggleDeleteMovie] = useState(false);

  const handleEdit = () => {
    toggleEditMovie(true);
  };

  const handleDelete = () => {
    toggleDeleteMovie(true);
  };

  const { title, year, genres, poster_url } = movie;

  return (
    <div className={styles.movieTile}>
      <div className={styles.movieTile_poster}>
        <img
          src={poster_url}
          alt={`${title} poster`}
          data-testid='movie-posterurl'
        />

        <MovieMenu handleEdit={handleEdit} handleDelete={handleDelete} />
      </div>

      <div className={styles.movieTile_description}>
        <h2 className={styles.movieTile_title} data-testid='movie-title'>
          <button onClick={() => setActiveMovie(movie)}>{title}</button>
        </h2>
        <p className={styles.movieTile_genre} data-testid='movie-genre'>
          {formatGenres(genres)}
        </p>
        <span className={styles.movieTile_releaseDate} data-testid='movie-year'>
          {year}
        </span>
      </div>

      {showEditMovie && (
        <Dialog
          title='Edit movie'
          size='lg'
          handleClose={() => toggleEditMovie(false)}
        >
          <MovieForm movie={movie} />
        </Dialog>
      )}

      {showDeleteMovie && (
        <Dialog
          title='Delete movie'
          size='sm'
          handleClose={() => toggleDeleteMovie(false)}
        >
          <DeleteConfirmation />
        </Dialog>
      )}
    </div>
  );
};

MovieTile.propTypes = {
  setPreview: PropTypes.func,
  movie: PropTypes.object,
};
