import { BrowserRouter as Router } from 'react-router-dom';

import { MovieDetail } from './MovieDetail';

import { MOCKED_MOVIES } from '../../mocks/mocks';

export default {
  title: 'Components/MovieDetail',
  component: MovieDetail,
  decorators: [
    (Story) => (
      <Router>
        <Story />
      </Router>
    ),
  ],
};
const Template = (args) => <MovieDetail {...args} />;

export const Default = Template.bind({});

Default.args = {
  activeMovie: MOCKED_MOVIES[0] || {},
};
