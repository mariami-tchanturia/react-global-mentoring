import { useState, useEffect } from 'react';
import { useSearchParams, Outlet, Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';

import { MoviesListing, Footer } from '../../components';
import { Spinner } from '../../common';
import { getMovies } from '../../api/movieService';

const defaultGenre = 'all';
const defaultSortCriterion = 'release_date';

const MovieListPage = ({ searchQuery }) => {
  const [searchParams] = useSearchParams();

  const [movies, setMovies] = useState([]);
  const [activeGenre, setActiveGenre] = useState(
    searchParams.get('genre') || defaultGenre
  );
  const [sortCriterion, setSortCriterion] = useState(
    searchParams.get('sortBy') || defaultSortCriterion
  );

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
    return <Navigate to='/not-Found' />;
  }

  return (
    <>
      <Outlet />
      <MoviesListing
        movies={movies}
        activeGenre={activeGenre}
        setActiveGenre={setActiveGenre}
        setSortCriterion={setSortCriterion}
      />
      <Footer />
    </>
  );
};

MovieListPage.propTypes = {
  searchQuery: PropTypes.string.isRequired,
};

export default MovieListPage;
