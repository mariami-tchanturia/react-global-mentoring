import { useState } from 'react';
import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';

import {
  DeleteConfirmation,
  MovieMenu,
  MovieForm,
  MoviePoster,
} from '../../components';
import { Dialog } from '../../common';
import { formatGenres } from '../../helpers/formatGenres';
import styles from './MovieTile.module.scss';

export const MovieTile = ({ movie }) => {
  const location = useLocation();
  const [showEditMovie, toggleEditMovie] = useState(false);
  const [showDeleteMovie, toggleDeleteMovie] = useState(false);

  const handleupdate = (movie) => {
    console.log('Simulating Movie Update');
    console.log(`This should be new movie: `, movie);

    toggleEditMovie(false);
  };

  const handleDelete = () => {
    console.log('Simulating Movie Delete');
    console.log(`The ID of movie, that should be removed is: `, id);

    toggleDeleteMovie(false);
  };

  const { id, title, release_date, genres, poster_path } = movie;

  return (
    <div className={styles.movieTile}>
      <div className={styles.movieTile_poster}>
        <MoviePoster src={poster_path} alt={title} />

        <MovieMenu
          handleEdit={() => toggleEditMovie(true)}
          handleDelete={() => toggleDeleteMovie(true)}
        />
      </div>

      <div className={styles.movieTile_description}>
        <h2 className={styles.movieTile_title} data-testid='movie-title'>
          <Link
            to={{
              pathname: `/${id}`,
              search: location.search,
            }}
          >
            {title}
          </Link>
        </h2>
        <p className={styles.movieTile_genre} data-testid='movie-genre'>
          {formatGenres(genres)}
        </p>
        <span
          className={styles.movieTile_releaseDate}
          data-testid='movie-release-date'
        >
          {parseInt(release_date)}
        </span>
      </div>

      {showEditMovie && (
        <Dialog
          title='Edit movie'
          size='lg'
          handleClose={() => toggleEditMovie(false)}
        >
          <MovieForm movie={movie} handleSubmit={handleupdate} />
        </Dialog>
      )}

      {showDeleteMovie && (
        <Dialog
          title='Delete movie'
          size='sm'
          handleClose={() => toggleDeleteMovie(false)}
        >
          <DeleteConfirmation handleDelete={handleDelete} />
        </Dialog>
      )}
    </div>
  );
};

export const MovieType = PropTypes.shape({
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string),
  release_date: PropTypes.string.isRequired,
  vote_average: PropTypes.number.isRequired,
  runtime: PropTypes.number,
  overview: PropTypes.string.isRequired,
  poster_path: PropTypes.string,
});

MovieTile.propTypes = {
  movie: MovieType,
};
