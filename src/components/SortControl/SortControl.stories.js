import { SortControl } from './SortControl';

import { SELECT_OPTIONS } from '../../constants/index';

export default {
  title: 'Components/SortControl',
  component: SortControl,
};
const Template = (args) => <SortControl {...args} />;

export const Default = Template.bind({});

Default.args = {
  options: SELECT_OPTIONS,
  label: 'Sort By',
};
