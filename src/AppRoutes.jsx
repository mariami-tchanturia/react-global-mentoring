import { Routes, Route, Navigate } from 'react-router-dom';

import MovieDetailPage from './pages/MovieDetailPage/MovieDetailPage';
import MovieListPage from './pages/MovieListPage/MovieListPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';

import { Header } from './components/index';
import { PATH_NAMES } from './config/routes';

export const AppRoutes = () => {
  const { All, Home, MovieDetail, NotFound } = PATH_NAMES;

  return (
    <Routes>
      <Route path={All} element={<Navigate replace to={NotFound} />} />

      <Route path={Home} element={<MovieListPage />}>
        <Route path={Home} element={<Header />} />
        <Route path={MovieDetail} element={<MovieDetailPage />} />
      </Route>

      <Route path={NotFound} element={<NotFoundPage />} />
    </Routes>
  );
};
