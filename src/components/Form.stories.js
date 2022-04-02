import Form from './Form.js';

export default {
  title: 'components/Form',
  component: Form,
  argTypes: {
    onSubmit: 'onSubmit',
    onSubmitIngredients: 'onSubmitIngredients',
  },
};

const Template = args => <Form {...args} />;

export const Default = Template.bind({});
Default.args = {};
