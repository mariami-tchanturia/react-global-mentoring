import { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { SearchForm } from './SearchForm';

export default {
  title: 'Components/SearchForm',
  component: SearchForm,
  decorators: [
    (Story) => (
      <Router>
        <Story />
      </Router>
    ),
  ],
};

export const Default = (args) => {
  const [searchQuery, setSearchQuery] = useState();

  return <SearchForm {...args} setSearchQuery={setSearchQuery} />;
};
