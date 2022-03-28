import Recipe from './Recipe.js';

export default {
  title: 'components/Recipe',
  component: Recipe,
  argTypes: {},
};

const Template = args => <Recipe {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Pommes',
};
