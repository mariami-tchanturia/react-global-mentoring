import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';

import { MovieMenu, MoviePoster } from '../../components';
import { formatGenres } from '../../helpers/formatGenres';
import styles from './MovieTile.module.scss';

export const MovieTile = ({ movie }) => {
  const { id, title, release_date, genres, poster_path } = movie;
  const location = useLocation();

  return (
    <div className={styles.movieTile}>
      <div className={styles.movieTile_poster}>
        <MoviePoster src={poster_path} alt={title} />

        <MovieMenu id={id} />
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
