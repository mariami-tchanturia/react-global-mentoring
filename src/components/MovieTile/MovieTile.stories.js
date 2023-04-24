import { BrowserRouter as Router } from 'react-router-dom';
import { MovieTile } from './MovieTile';

import { MOCKED_MOVIES } from '../../mocks/mocks';

export default {
  title: 'Components/MovieTile',
  component: MovieTile,
  decorators: [
    (Story) => (
      <Router>
        <Story />
      </Router>
    ),
  ],
};
const Template = (args) => <MovieTile {...args} />;

export const Default = Template.bind({});

Default.args = {
  movie: MOCKED_MOVIES[0],
};
