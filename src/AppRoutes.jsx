import { Routes, Route } from 'react-router-dom';

import AppLayout from './AppLayout';
import MovieDetailPage from './pages/MovieDetailPage/MovieDetailPage';
import HomePage from './pages/HomePage/HomePage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import { PATH_NAMES } from './routes/contants';

export const AppRoutes = () => {
  const { Home, MovieDetail, NotFound } = PATH_NAMES;

  return (
    <Routes>
      <Route path={Home} element={<AppLayout />}>
        <Route path={Home} element={<HomePage />} />
        <Route path={MovieDetail} element={<MovieDetailPage />} />
        <Route path={NotFound} element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};
