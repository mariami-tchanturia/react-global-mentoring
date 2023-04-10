import { MovieForm } from '../../components/MovieForm/MovieForm';

import { MOCKED_MOVIES } from '../../mocks/mocks';

export default {
  title: 'Components/MovieForm',
  component: MovieForm,
};

export const MovieAddForm = (args) => <MovieForm {...args} />;

export const MovieEditForm = (args) => <MovieForm {...args} />;

MovieEditForm.args = {
  movie: MOCKED_MOVIES[0],
};
