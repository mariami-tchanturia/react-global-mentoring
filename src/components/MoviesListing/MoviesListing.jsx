import PropTypes from 'prop-types';

import { GenreSelect } from '../../components/GenreSelect/GenreSelect';
import { MovieTile } from '../../components/MovieTile/MovieTile';
import { SortControl } from '../../components/SortControl/SortControl';

import styles from './MoviesListing.module.scss';

export const MoviesListing = ({ movies, genres, options, setPreview }) => (
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
          <MovieTile key={movie.id} movie={movie} setPreview={setPreview} />
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
