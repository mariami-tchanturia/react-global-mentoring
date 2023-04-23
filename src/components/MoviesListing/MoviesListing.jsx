import PropTypes from 'prop-types';

import { GenreSelect, MovieTile, SortControl } from '../../components';
import styles from './MoviesListing.module.scss';

import { MovieType } from '../MovieTile/MovieTile';
import { GenreOptionsType } from '../../components/GenreSelect/GenreSelect';

export const MoviesListing = ({
  movies,
  setActiveMovie,
  genres,
  options,
  setSortCriterion,
  activeGenre,
  setActiveGenre,
}) => (
  <main className={styles.moviesWrapper}>
    <div className='container-lg'>
      <div className={styles.filterAndSort}>
        <GenreSelect
          genres={genres}
          activeGenre={activeGenre}
          setActiveGenre={setActiveGenre}
        />
        <SortControl
          label='Sort by'
          options={options}
          setSortCriterion={setSortCriterion}
        />
      </div>

      <div className={styles.movies} data-testid='movies-listing'>
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
  setActiveMovie: PropTypes.func,
  movies: PropTypes.arrayOf(MovieType),
  genres: GenreOptionsType.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    })
  ).isRequired,
};
