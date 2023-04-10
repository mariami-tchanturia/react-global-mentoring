import './App.scss';
import { useState } from 'react';

import { Counter } from './components/Counter/Counter';

import MovieListPage from './pages/MovieListPage/MovieListPage';
import MovieDetailPage from './pages/MovieDetailPage/MovieDetailPage';

import { MOCKED_MOVIES } from './mocks/mocks';

function App() {
  const [activeMovie, setActiveMovie] = useState(null);
  const [movies, setMovies] = useState(MOCKED_MOVIES);

  return (
    <div className='App'>
      {/* <Counter initialValue={0} /> */}

      {activeMovie ? (
        <MovieDetailPage
          movies={movies}
          setMovies={setMovies}
          setActiveMovie={setActiveMovie}
          activeMovie={activeMovie}
        />
      ) : (
        <MovieListPage
          movies={movies}
          setMovies={setMovies}
          setActiveMovie={setActiveMovie}
        />
      )}
    </div>
  );
}

export default App;
