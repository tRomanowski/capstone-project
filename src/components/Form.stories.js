import Form from './Form.js';

export default {
  title: 'components/Form',
  component: Form,
  argTypes: {
    onsubmit: 'onSubmit',
  },
};

const Template = args => <Form {...args} />;

export const Default = Template.bind({});
Default.args = {};
