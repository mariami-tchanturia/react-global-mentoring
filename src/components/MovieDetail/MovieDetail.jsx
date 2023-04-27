import { MoviePoster } from '../MoviePoster/MoviePoster';
import { getMovieDuration } from '../../helpers/getMovieDuration';
import { formatGenres } from '../../helpers/formatGenres';
import { MovieType } from '../MovieTile/MovieTile';
import styles from './MovieDetail.module.scss';

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
            {parseInt(release_date) || ''}
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
  activeMovie: MovieType,
};
