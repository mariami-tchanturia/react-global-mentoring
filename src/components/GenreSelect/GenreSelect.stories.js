import { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { GenreSelect } from './GenreSelect';
import { GENRES_OPTIONS } from '../../constants';

export default {
  title: 'Components/GenreSelect',
  component: GenreSelect,
  decorators: [
    (Story) => (
      <Router>
        <Story />
      </Router>
    ),
  ],
};

const Template = (args) => {
  const [activeGenre, setActiveGenre] = useState('Horror');

  return (
    <GenreSelect
      {...args}
      activeGenre={activeGenre}
      setActiveGenre={setActiveGenre}
    />
  );
};

export const Default = Template.bind({});

Default.args = {
  genres: GENRES_OPTIONS,
};
