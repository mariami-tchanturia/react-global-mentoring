import PropTypes from 'prop-types';
import { MovieMenu } from '..';

import styles from './MovieTile.module.scss';

const MovieTile = ({ movie, setPreview }) => {
  const handleEdit = () => {
    console.log('Edit button was clicked');
  };

  const handleDelete = () => {
    console.log('Delete button was clicked');
  };

  const { title, year, genre, poster_url } = movie;

  return (
    <div className={styles.movieTile}>
      <div className={styles.movieTile_poster}>
        <img src={poster_url} alt={`${title} poster`} />

        <MovieMenu handleEdit={handleEdit} handleDelete={handleDelete} />
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

MovieTile.propTypes = {
  setPreview: PropTypes.func,
  movie: PropTypes.object,
};

export default MovieTile;
