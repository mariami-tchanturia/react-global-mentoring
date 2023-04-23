import PropTypes from 'prop-types';

import { getMovieDuration } from '../../helpers/getMovieDuration';
import { formatGenres } from '../../helpers/formatGenres';
import styles from './MovieDetail.module.scss';
import { MoviePoster } from '../MoviePoster/MoviePoster';

export const MovieDetail = ({ activeMovie }) => {
  const {
    title,
    release_date,
    genres,
    overview,
    vote_average,
    runtime,
    poster_path,
  } = activeMovie;

  return (
    <article className={styles.movideDetail} data-testid='movie-detail'>
      <div className={styles.movideDetail_poster}>
        <MoviePoster src={poster_path} alt={title} />
      </div>

      <div className={styles.movideDetail_description}>
        <h1 className={styles.movideDetail_title} data-testid='movie-title'>
          {title}
          <span
            className={styles.movideDetail_vote_average}
            data-testid='movie-vote-average
						'
          >
            {vote_average}
          </span>
        </h1>
        <p className={styles.movideDetail_genre} data-testid='movie-genre'>
          {formatGenres(genres)}
        </p>
        <p>
          <span
            className={styles.movideDetail_releaseDate}
            data-testid='movie-release-date'
          >
            {parseInt(release_date)}
          </span>
          <span
            className={styles.movideDetail_duration}
            data-testid='movie-duration'
          >
            {getMovieDuration(runtime)}
          </span>
        </p>

        <p
          className={styles.movideDetail_overview}
          data-testid='movie-overview'
        >
          {overview}
        </p>
      </div>
    </article>
  );
};

MovieDetail.propTypes = {
  activeMovie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string),
    release_date: PropTypes.string.isRequired,
    vote_average: PropTypes.number.isRequired,
    runtime: PropTypes.number.isRequired,
    overview: PropTypes.string.isRequired,
    poster_path: PropTypes.string,
  }),
};
