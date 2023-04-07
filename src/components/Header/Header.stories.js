import { Header } from './Header';

import { MOCKED_MOVIES } from '../../mocks/mocks';

export default {
  title: 'Components/Header',
  component: Header,
};

const Template = (args) => <Header {...args} />;

export const Default = Template.bind({});

Default.args = {
  preview: null,
};

export const WithPreview = Template.bind({});

WithPreview.args = {
  preview: MOCKED_MOVIES[0],
};
