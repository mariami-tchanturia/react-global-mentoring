import { BrowserRouter as Router } from 'react-router-dom';
/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
	decorators: [
    (Story) => (
      <Router>
        <Story />
      </Router>
    ),
  ],
};

export default preview;
