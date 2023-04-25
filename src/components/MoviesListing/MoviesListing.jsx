import PropTypes from 'prop-types';

import { GenreSelect, MovieTile, SortControl } from '../../components';
import { MovieType } from '../MovieTile/MovieTile';
import { GENRES_OPTIONS, SELECT_OPTIONS } from '../../constants';
import styles from './MoviesListing.module.scss';

export const MoviesListing = ({
  movies,
  activeGenre,
  setActiveGenre,
  setSortCriterion,
}) => {
  return (
    <main className={styles.moviesWrapper}>
      <div className='container-lg'>
        <div className={styles.filterAndSort}>
          <GenreSelect
            genres={GENRES_OPTIONS}
            activeGenre={activeGenre}
            setActiveGenre={setActiveGenre}
          />
          <SortControl
            label='Sort by'
            options={SELECT_OPTIONS}
            setSortCriterion={setSortCriterion}
          />
        </div>

        <div className={styles.movies} data-testid='movies-listing'>
          {movies.map((movie) => (
            <MovieTile key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </main>
  );
};

MoviesListing.propTypes = {
  movies: PropTypes.arrayOf(MovieType),
  activeGenre: PropTypes.string,
  setActiveMovie: PropTypes.func,
  setSortCriterion: PropTypes.func,
};
