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
  children: 'Click',
  remove: false,
};

export const Randomize = Template.bind({});
Randomize.args = {
  children: 'Randomize',
  remove: false,
};

export const Remove = Template.bind({});
Remove.args = {
  children: 'Delete',
  remove: true,
};
