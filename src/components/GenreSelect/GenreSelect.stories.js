import React, { useState } from 'react';
import GenreSelect from './GenreSelect';

import { GENRES_OPTIONS } from '../../constants';

export default {
  title: 'Components/GenreSelect',
  component: GenreSelect,
};

const Template = (args) => {
  const [currentGenre, setCurrentGenre] = useState(args.defaultGenre);

  return <GenreSelect {...args} currentGenre={currentGenre} />;
};

export const Default = Template.bind({});

Default.args = {
  genres: GENRES_OPTIONS,
  defaultGenre: 'Horror',
};
