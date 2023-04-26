import { useState } from 'react';
import { Routes, Route, useSearchParams, Navigate } from 'react-router-dom';

import MovieDetailPage from './pages/MovieDetailPage/MovieDetailPage';
import MovieListPage from './pages/MovieListPage/MovieListPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';

import { Header } from './components/index';
import { PATH_NAMES } from './config/routes';

export const AppRoutes = () => {
  const [searchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(
    searchParams.get('query') || ''
  );

  const { All, Home, MovieDetail, NotFound } = PATH_NAMES;

  return (
    <Routes>
      <Route path={All} element={<Navigate replace to='/not-found' />} />

      <Route path={Home} element={<MovieListPage searchQuery={searchQuery} />}>
        <Route
          path={Home}
          element={<Header setSearchQuery={setSearchQuery} />}
        />
        <Route path={MovieDetail} element={<MovieDetailPage />} />
      </Route>

      <Route path={NotFound} element={<NotFoundPage />} />
    </Routes>
  );
};
