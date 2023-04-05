import MovieDetail from './MovieDetail';

import { MOCKED_MOVIES } from '../../mocks/mocks';

export default {
  title: 'Components/MovieDetail',
  component: MovieDetail,
};
const Template = (args) => <MovieDetail {...args} />;

export const Default = Template.bind({});

Default.args = {
  movie: MOCKED_MOVIES[0],
};
