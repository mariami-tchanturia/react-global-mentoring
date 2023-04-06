import PropTypes from 'prop-types';

import styles from './MovieDetail.module.scss';

const MovieDetail = ({ movie }) => {
  const { title, year, genre, plot, rating, duration, poster_url } = movie;

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
          {genre}
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
            {duration}
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
  movie: PropTypes.object,
};

export default MovieDetail;
