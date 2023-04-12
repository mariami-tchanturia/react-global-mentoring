import PropTypes from 'prop-types';

import { getMovieDuration } from '../../helpers/getMovieDuration';
import { formatGenres } from '../../helpers/formatGenres';
import styles from './MovieDetail.module.scss';

export const MovieDetail = ({ activeMovie }) => {
  const { title, year, genres, plot, rating, duration, poster_url } =
    activeMovie;

  return (
    <article className={styles.movideDetail}>
      <div className={styles.movideDetail_poster}>
        <img
          src={poster_url}
          alt={`${title} poster`}
          data-testid='movie-posterurl'
        />
      </div>

      <div className={styles.movideDetail_description}>
        <h1 className={styles.movideDetail_title} data-testid='movie-title'>
          {title}
          <span
            className={styles.movideDetail_rating}
            data-testid='movie-rating'
          >
            {rating}
          </span>
        </h1>
        <p className={styles.movideDetail_genre} data-testid='movie-genre'>
          {formatGenres(genres)}
        </p>
        <p>
          <span
            className={styles.movideDetail_releaseDate}
            data-testid='movie-year'
          >
            {year}
          </span>
          <span
            className={styles.movideDetail_duration}
            data-testid='movie-duration'
          >
            {getMovieDuration(duration)}
          </span>
        </p>

        <p className={styles.movideDetail_plot} data-testid='movie-plot'>
          {plot}
        </p>
      </div>
    </article>
  );
};

MovieDetail.propTypes = {
  activeMovie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(
      PropTypes.shape({
        value: PropTypes.number.isRequired,
        label: PropTypes.string.isRequired,
      })
    ),
    year: PropTypes.string.isRequired,
    rating: PropTypes.string.isRequired,
    duration: PropTypes.string.isRequired,
    plot: PropTypes.string.isRequired,
    poster_url: PropTypes.string.isRequired,
  }),
};
