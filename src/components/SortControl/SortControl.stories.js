import { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { SortControl } from './SortControl';

import { SELECT_OPTIONS } from '../../constants/index';

export default {
  title: 'Components/SortControl',
  component: SortControl,
  decorators: [
    (Story) => (
      <Router>
        <Story />
      </Router>
    ),
  ],
};
const Template = (args) => {
  const [sortCriterion, setSortCriterion] = useState();

  return <SortControl {...args} setSortCriterion={setSortCriterion} />;
};

export const Default = Template.bind({});

Default.args = {
  options: SELECT_OPTIONS,
  label: 'Sort By',
};
