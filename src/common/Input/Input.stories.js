import { Input } from './Input';

export default {
  title: 'Common/Input',
  component: Input,
};

const Template = (args) => <Input {...args} />;

export const WithoutPlaceholder = Template.bind({});

export const WithPlaceholder = Template.bind({});

WithPlaceholder.args = {
  className: 'searchForm__input',
  placeholderText: 'What do you want to watch?',
};

export const WithValue = Template.bind({});

WithValue.args = {
  className: 'searchForm__input',
  placeholderText: 'What do you want to watch?',
  value: 'Search Query',
};
