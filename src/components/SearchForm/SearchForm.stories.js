import SearchForm from './SearchForm';

export default {
  title: 'Components/SearchForm',
  component: SearchForm,
  initialSearchQuery: { control: 'text' },
};

export const Default = (args) => <SearchForm {...args} />;

export const InitialSearch = (args) => <SearchForm {...args} />;

InitialSearch.args = {
  initialSearchQuery: 'Initial Search Query',
};
