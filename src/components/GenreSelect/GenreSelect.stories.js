import { useState } from 'react';

import { GenreSelect } from './GenreSelect';
import { GENRES_OPTIONS } from '../../constants';

export default {
  title: 'Components/GenreSelect',
  component: GenreSelect,
};

const Template = (args) => {
  // eslint-disable-next-line no-unused-vars
  const [activeGenre, setActiveGenre] = useState();

  return (
    <GenreSelect
      {...args}
      setActiveGenre={setActiveGenre}
      activeGenre='Horror'
    />
  );
};

export const Default = Template.bind({});

Default.args = {
  genres: GENRES_OPTIONS,
};
