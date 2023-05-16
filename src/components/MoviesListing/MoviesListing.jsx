import { useState } from 'react';
import { useRouter } from 'next/router';
import { DEFAULT_GENRE } from '../../../src/constants';

import { GenreSelect, MovieTile, SortControl } from '../../components';
import { TOP_GENRES_OPTIONS, SELECT_OPTIONS } from '../../constants';
import styles from './MoviesListing.module.scss';

export const MoviesListing = ({ movies }) => {
  const { query } = useRouter();
  const [activeGenre, setActiveGenre] = useState(query.genre || DEFAULT_GENRE);

  return (
    <main className={styles.moviesWrapper}>
      <div className='container-lg'>
        <div className={styles.filterAndSort}>
          <GenreSelect
            genres={TOP_GENRES_OPTIONS}
            activeGenre={activeGenre}
            setActiveGenre={setActiveGenre}
          />
          <SortControl label='Sort by' options={SELECT_OPTIONS} />
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
