import styles from './MovieDetail.module.scss';

function MovieDetail({ movie }) {
  const { title, year, genre, plot, rating, duration, poster_url } = movie;

  return (
    <article className={styles.movideDetail}>
      <div className={styles.movideDetail_poster}>
        <img src={poster_url} alt={`${title} poster`} />
      </div>

      <div className={styles.movideDetail_description}>
        <h1 className={styles.movideDetail_title}>
          {title}
          <span className={styles.movideDetail_rating}>{rating}</span>
        </h1>
        <p className={styles.movideDetail_genre}>{genre}</p>
        <p>
          <span className={styles.movideDetail_releaseDate}>{year}</span>
          <span className={styles.movideDetail_duration}>{duration}</span>
        </p>

        <p className={styles.movideDetail_plot}>{plot}</p>
      </div>
    </article>
  );
}

export default MovieDetail;
