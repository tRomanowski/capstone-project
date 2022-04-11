import Header from './Header.js';

export default {
  title: 'components/Header',
  component: Header,
  argTypes: {
    onClick: 'onClick',
  },
};

const Template = args => <Header {...args} />;

export const Default = Template.bind({});
Default.args = {};
