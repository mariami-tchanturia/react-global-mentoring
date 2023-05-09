import { Dialog } from '../../common';
import { MovieForm } from '..';

export const AddMovieForm = () => (
  <Dialog title='Add movie' size='lg' isOpen={true}>
    <MovieForm />
  </Dialog>
);
