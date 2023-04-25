import { useState } from 'react';

import { MoviesListing } from './MoviesListing';
import { MOCKED_MOVIES } from '../../mocks/mocks';
import { GENRES_OPTIONS } from '../../constants';

export default {
  title: 'Components/MoviesListing',
  component: MoviesListing,
};

const Template = (args) => {
  // eslint-disable-next-line no-unused-vars
  const [activeGenre, setActiveGenre] = useState(GENRES_OPTIONS[3].label);
  // eslint-disable-next-line no-unused-vars
  const [sortCriterion, SetSortCriterion] = useState();

  return (
    <MoviesListing
      {...args}
      activeGenre={activeGenre}
      setActiveGenre={setActiveGenre}
      setSortCriterion={SetSortCriterion}
    />
  );
};

export const Default = Template.bind({});

Default.args = {
  movies: MOCKED_MOVIES,
};
