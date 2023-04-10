import { MovieForm } from '../../components/MovieForm/MovieForm';
import { DeleteConfirmation } from '../../components/DeleteConfirmation/DeleteConfirmation';
import { SuccessMessage } from '../../components/SuccessMessage/SuccessMessage';
import { Dialog } from '../';

import { MOCKED_MOVIES } from '../../mocks/mocks';

export default {
  title: 'Common/Dialog',
  component: Dialog,
};

export const MovieAddDialog = (args) => (
  <Dialog {...args}>
    <MovieForm />
  </Dialog>
);

export const MovieEditDialog = (args) => (
  <Dialog {...args}>
    <MovieForm />
  </Dialog>
);

export const MovieDeleteConfirmation = (args) => (
  <Dialog {...args}>
    <DeleteConfirmation />
  </Dialog>
);

export const MovieAddSuccessMessage = (args) => (
  <Dialog {...args}>
    <SuccessMessage />
  </Dialog>
);

MovieAddDialog.args = {
  title: 'Add movie',
  size: 'lg',
};

MovieEditDialog.args = {
  title: 'Edit movie',
  movie: MOCKED_MOVIES[0],
  size: 'lg',
};

MovieDeleteConfirmation.args = {
  title: 'Delete movie',
  size: 'sm',
};

MovieAddSuccessMessage.args = {
  size: 'sm',
};
