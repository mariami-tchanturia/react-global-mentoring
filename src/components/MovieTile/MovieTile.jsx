import { MovieMenu } from '..';

import styles from './MovieTile.module.scss';

const MovieTile = ({ movie, setPreview }) => {
  const handleEdit = () => {};

  const handleDlete = () => {};

  const { title, year, genre, poster_url } = movie;

  return (
    <div className={styles.movieTile}>
      <div className={styles.movieTile_poster}>
        <img src={poster_url} alt={`${title} poster`} />

        <MovieMenu handleEdit={handleEdit} handleDlete={handleDlete} />
      </div>

      <div className={styles.movieTile_description}>
        <h2 className={styles.movieTile_title}>
          <button onClick={() => setPreview(movie)}>{title}</button>
        </h2>
        <p className={styles.movieTile_genre}>{genre}</p>
        <span className={styles.movieTile_releaseDate}>{year}</span>
      </div>
    </div>
  );
};

export default MovieTile;
