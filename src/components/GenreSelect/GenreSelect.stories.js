import { useState } from 'react';

import { GenreSelect } from './GenreSelect';
import { GENRES_OPTIONS } from '../../constants';

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
  genres: GENRES_OPTIONS,
};
