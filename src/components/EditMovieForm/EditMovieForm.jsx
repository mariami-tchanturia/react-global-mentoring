import { Dialog } from '../../common';
import { MovieForm } from '..';

export const EditMovieForm = () => (
  <Dialog title='Edit movie' size='lg' isOpen={true}>
    <MovieForm />
  </Dialog>
);
