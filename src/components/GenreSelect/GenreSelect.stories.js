import { useState } from 'react';

import { GenreSelect } from './GenreSelect';
import { TOP_GENRES_OPTIONS } from '../../constants';

export default {
  title: 'Components/GenreSelect',
  component: GenreSelect,
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
  genres: TOP_GENRES_OPTIONS,
};
