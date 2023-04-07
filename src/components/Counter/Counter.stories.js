import { Counter } from './Counter';

export default {
  title: 'Components/Counter',
  component: Counter,
  argTypes: {
    initialValue: { control: 'number' },
  },
};

const Template = (args) => <Counter {...args} />;

export const Default = Template.bind({});

Default.args = {
  initialValue: 10,
};
