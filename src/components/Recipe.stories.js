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
  image: 'https://source.unsplash.com/random/200×300',
  text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
  url: 'https://developer.mozilla.org/de/',
};
