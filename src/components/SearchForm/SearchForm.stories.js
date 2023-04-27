import { useState } from 'react';
import { SearchForm } from './SearchForm';

export default {
  title: 'Components/SearchForm',
  component: SearchForm,
};

export const Default = (args) => {
  const [searchQuery, setSearchQuery] = useState();

  return <SearchForm {...args} setSearchQuery={setSearchQuery} />;
};
