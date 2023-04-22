import './App.scss';
import { useState, useEffect } from 'react';

import { Counter } from './components';

import MovieListPage from './pages/MovieListPage/MovieListPage';
import MovieDetailPage from './pages/MovieDetailPage/MovieDetailPage';

import { getMovies } from './api/movieService';

const defaultGenre = 'All';
const defaultSortCriterion = 'release_date';

function App() {
  const [movies, setMovies] = useState([]);
  const [activeMovie, setActiveMovie] = useState(null);

  const [sortCriterion, setSortCriterion] = useState(defaultSortCriterion);
  const [activeGenre, setActiveGenre] = useState(defaultGenre);
  const [searchQuery, setSearchQuery] = useState('');

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
    <div className='App'>
      {/* <Counter initialValue={0} /> */}

      {activeMovie ? (
        <MovieDetailPage
          movies={movies}
          setMovies={setMovies}
          setActiveMovie={setActiveMovie}
          activeMovie={activeMovie}
          setSortCriterion={setSortCriterion}
          activeGenre={activeGenre}
          setActiveGenre={setActiveGenre}
        />
      ) : (
        <MovieListPage
          movies={movies}
          setMovies={setMovies}
          setActiveMovie={setActiveMovie}
          setSearchQuery={setSearchQuery}
          setSortCriterion={setSortCriterion}
          activeGenre={activeGenre}
          setActiveGenre={setActiveGenre}
        />
      )}
    </div>
  );
}

export default App;
