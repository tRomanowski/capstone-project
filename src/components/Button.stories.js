import Button from './Button.js';

export default {
  title: 'components/Button',
  component: Button,
  argTypes: {
    onRandomize: 'onRandomize',
  },
};

const Template = args => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: 'Randomize',
  remove: false,
};
