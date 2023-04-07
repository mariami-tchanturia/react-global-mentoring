import { MovieTile } from './MovieTile';

import { MOCKED_MOVIES } from '../../mocks/mocks';

export default {
  title: 'Components/MovieTile',
  component: MovieTile,
};
const Template = (args) => <MovieTile {...args} />;

export const Default = Template.bind({});

Default.args = {
  movie: MOCKED_MOVIES[0],
};
