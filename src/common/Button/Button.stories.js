import { Button } from './Button';

import searchIcon from '../../assets/search-icon.png';

export default {
  title: 'Common/Button',
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  className: 'btn--primary',
  children: 'Search',
};

export const Secondary = Template.bind({});

Secondary.args = {
  className: 'btn--secondary',
  children: '+ Add Movie',
};

export const Transparent = Template.bind({});

Transparent.args = {
  className: 'btn--transparent',
  children: <img src={searchIcon} alt='Switch to Search mode' />,
};
