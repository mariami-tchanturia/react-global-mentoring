import { useState } from 'react';
import { Header } from './Header';

export default {
  title: 'Components/Header',
  component: Header,
};

const Template = (args) => {
  const [searchQuery, setSearchQuery] = useState('');

  return <Header {...args} setSearchQuery={setSearchQuery} />;
};

export const Default = Template.bind({});
