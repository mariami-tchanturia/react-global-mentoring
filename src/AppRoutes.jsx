import { useState } from 'react';
import { Routes, Route, useSearchParams } from 'react-router-dom';

import MovieDetailPage from './pages/MovieDetailPage/MovieDetailPage';
import MovieListPage from './pages/MovieListPage/MovieListPage';
import { Header } from './components/index';

export const AppRoutes = () => {
  const [searchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(
    searchParams.get('query') || ''
  );

  return (
    <Routes>
      <Route path='/' element={<MovieListPage searchQuery={searchQuery} />}>
        <Route path='/' element={<Header setSearchQuery={setSearchQuery} />} />
        <Route path=':movieID' element={<MovieDetailPage />} />
      </Route>
    </Routes>
  );
};
