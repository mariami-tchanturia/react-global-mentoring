import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSearchParams, Navigate, useNavigate } from 'react-router-dom';

import { GenreSelect, MovieTile, SortControl } from '../../components';
import { Spinner } from '../../common';
import { getMovies } from '../../api/movieService';
import { PATH_NAMES } from '../../routes/contants';
import { MovieType } from '../MovieTile/MovieTile';
import { GENRES_OPTIONS, SELECT_OPTIONS } from '../../constants';
import styles from './MoviesListing.module.scss';

const defaultGenre = 'all';
const defaultSortCriterion = 'release_date';

export const MoviesListing = () => {
  const [searchParams] = useSearchParams();

  const [movies, setMovies] = useState([]);
  const [activeGenre, setActiveGenre] = useState(
    searchParams.get('genre') || defaultGenre
  );
  const [sortCriterion, setSortCriterion] = useState(
    searchParams.get('sortBy') || defaultSortCriterion
  );
  const searchQuery = searchParams.get('query') || '';

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const genre = activeGenre === 'all' ? '' : [activeGenre];

    getMovies({ sortCriterion, searchQuery, genre })
      .then((movies) => setMovies(movies.data))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, [sortCriterion, searchQuery, activeGenre]);

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return <Navigate to={PATH_NAMES.NotFound} />;
  }

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
