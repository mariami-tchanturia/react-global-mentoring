import { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Header } from './Header';

export default {
  title: 'Components/Header',
  component: Header,
  decorators: [
    (Story) => (
      <Router>
        <Story />
      </Router>
    ),
  ],
};

const Template = (args) => {
  const [searchQuery, setSearchQuery] = useState('');

  return <Header {...args} setSearchQuery={setSearchQuery} />;
};

export const Default = Template.bind({});
