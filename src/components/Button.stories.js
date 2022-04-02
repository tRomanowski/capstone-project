import Button from './Button.js';

export default {
  title: 'components/Button',
  component: Button,
  argTypes: {
    onClick: 'onClick',
  },
};

const Template = args => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: 'Click',
  remove: false,
};

export const Randomize = Template.bind({});
Randomize.args = {
  text: 'Randomize',
  remove: false,
};

export const Remove = Template.bind({});
Remove.args = {
  text: 'Delete',
  remove: true,
};
