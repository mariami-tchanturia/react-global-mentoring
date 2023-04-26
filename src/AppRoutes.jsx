import { Routes, Route } from 'react-router-dom';

import Layout from './pages/Layout/Layout';
import MovieDetailPage from './pages/MovieDetailPage/MovieDetailPage';
import HomePage from './pages/HomePage/HomePage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import { PATH_NAMES } from './routes/contants';

export const AppRoutes = () => {
  const { Home, MovieDetail, NotFound } = PATH_NAMES;

  return (
    <Routes>
      <Route path={Home} element={<Layout />}>
        <Route path={Home} element={<HomePage />} />
        <Route path={MovieDetail} element={<MovieDetailPage />} />
        <Route path={NotFound} element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};
