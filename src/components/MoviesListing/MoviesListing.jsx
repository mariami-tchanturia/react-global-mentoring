import PropTypes from 'prop-types';

import { GenreSelect, MovieTile, SortControl } from '../../components';
import styles from './MoviesListing.module.scss';

export const MoviesListing = ({ movies, genres, options, setActiveMovie }) => (
  <main className={styles.moviesWrapper}>
    <div className='container-lg'>
      <div className={styles.filterAndSort}>
        <GenreSelect
          genres={genres}
          defaultGenre='All'
          onChange={(genre) => console.log(genre)}
        />
        <SortControl
          label='Sort by'
          options={options}
          defaultOption='date'
          onSort={(option) => console.log(option)}
        />
      </div>

      <div className={styles.movies}>
        {movies.map((movie) => (
          <MovieTile
            key={movie.id}
            movie={movie}
            setActiveMovie={setActiveMovie}
          />
        ))}
      </div>
    </div>
  </main>
);

MoviesListing.propTypes = {
  setPreview: PropTypes.func,
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
  genres: PropTypes.arrayOf(PropTypes.object).isRequired,
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
};
