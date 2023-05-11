import { Routes, Route } from 'react-router-dom';

import AppLayout from './AppLayout';
import MovieDetailPage from './pages/MovieDetailPage/MovieDetailPage';
import HomePage from './pages/HomePage/HomePage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import { DeleteMovieForm, AddMovieForm, EditMovieForm } from './components';
import { PATH_NAMES } from './routes/contants';

export const AppRoutes = () => {
  const { Home, MovieDetail, EditMovie, AddMovie, DeleteMovie, NotFound } =
    PATH_NAMES;

  return (
    <Routes>
      <Route path={Home} element={<AppLayout />}>
        <Route path={Home} element={<HomePage />}>
          <Route path={AddMovie} element={<AddMovieForm />} />
        </Route>
        <Route path={MovieDetail} element={<MovieDetailPage />}>
          <Route path={EditMovie} element={<EditMovieForm />} />
          <Route path={DeleteMovie} element={<DeleteMovieForm />} />
        </Route>
        <Route path={NotFound} element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};
