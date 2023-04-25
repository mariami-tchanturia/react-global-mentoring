import { useState } from 'react';
import { Routes, Route, useSearchParams, Navigate } from 'react-router-dom';

import MovieDetailPage from './pages/MovieDetailPage/MovieDetailPage';
import MovieListPage from './pages/MovieListPage/MovieListPage';
import { Header } from './components/index';
import { NotFound } from './common';

export const AppRoutes = () => {
  const [searchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(
    searchParams.get('query') || ''
  );

  return (
    <Routes>
      <Route path='*' element={<Navigate replace to='/not-found' />} />

      <Route path='/' element={<MovieListPage searchQuery={searchQuery} />}>
        <Route path='/' element={<Header setSearchQuery={setSearchQuery} />} />
        <Route path=':movieID' element={<MovieDetailPage />} />
      </Route>

      <Route path='/not-found' element={<NotFound />} />
    </Routes>
  );
};
