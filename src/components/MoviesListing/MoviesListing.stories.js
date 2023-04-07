import { MoviesListing } from './MoviesListing';

import { MOCKED_MOVIES } from '../../mocks/mocks';
import { GENRES_OPTIONS, SELECT_OPTIONS } from '../../constants';

export default {
  title: 'Components/MoviesListing',
  component: MoviesListing,
};

const Template = (args) => <MoviesListing {...args} />;

export const Default = Template.bind({});

Default.args = {
  movies: MOCKED_MOVIES,
  genres: GENRES_OPTIONS,
  options: SELECT_OPTIONS,
};
