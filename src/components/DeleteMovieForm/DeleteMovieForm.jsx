import { useState } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { DeleteConfirmation } from '../DeleteConfirmation/DeleteConfirmation';
import { Dialog } from '../../common';
import { deleteMovie } from '../../api/movieService';
import { PATH_NAMES } from '../../routes/contants';

export const DeleteMovieForm = () => {
  const { movieID } = useParams();
  const [error, setError] = useState('');

  const { Home, NotFound } = PATH_NAMES;

  const handleDelete = () => {
    deleteMovie(movieID)
      .then(() => (window.location.href = Home))
      .catch((error) => setError(error));
  };

  if (error) {
    return <Navigate to={NotFound} />;
  }

  return (
    <Dialog title='Delete movie' size='sm' isOpen={true}>
      <DeleteConfirmation handleDelete={handleDelete} />
    </Dialog>
  );
};
