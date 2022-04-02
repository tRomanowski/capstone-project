import RecipeList from './RecipeList.js';

export default {
  title: 'components/RecipeList',
  component: RecipeList,
  argTypes: {
    onDelete: 'onDelete',
  },
};

const Template = args => <RecipeList {...args} />;

export const Default = Template.bind({});
Default.args = {
  recipes: [
    {
      title: 'Pommes1',
      image: 'https://source.unsplash.com/random/200×300',
      summary:
        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
      url: 'https://developer.mozilla.org/de/',
      id: 1,
    },
    {
      title: 'Pommes2',
      image: 'https://source.unsplash.com/random/200×300',
      summary:
        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
      url: 'https://developer.mozilla.org/de/',
      id: 2,
    },
  ],
  missingIngredients: [{ name: 'oil' }],
};
