import { useState, useEffect } from 'react';
import { useSearchParams, Outlet } from 'react-router-dom';
import PropTypes from 'prop-types';

import { MoviesListing, Footer } from '../../components';
import { getMovies } from '../../api/movieService';

const defaultGenre = 'All';
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

  // TODO: Display spinner and error
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);

    const genre = activeGenre === 'All' ? '' : [activeGenre];

    getMovies({ sortCriterion, searchQuery, genre })
      .then((movies) => {
        setMovies(movies.data);
      })
      .catch((error) => setError(error.message))
      .finally(() => setLoading(false));
  }, [sortCriterion, searchQuery, activeGenre]);

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
