import { render, screen, within } from '@testing-library/react';

import RecipeList from './RecipeList';

describe('RecipeList', () => {
  it('renders a list with  2 recipes', () => {
    const recipes = [
      {
        title: 'Pommes1',
        image: 'https://source.unsplash.com/random/200×300',
        summary:
          'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
        sourceUrl: 'https://developer.mozilla.org/de/',
        missedIngredients: [{ name: 'oil' }],
        id: 1,
      },
      {
        title: 'Pommes2',
        image: 'https://source.unsplash.com/random/200×300',
        summary:
          'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
        sourceUrl: 'https://developer.mozilla.org/de/',
        missedIngredients: [{ name: 'oil' }],
        id: 2,
      },
    ];
    render(<RecipeList recipes={recipes} />);

    const list = screen.getByRole('list', { name: 'Recipes' });
    const { getAllByRole } = within(list);
    const items = getAllByRole('listitem');

    expect(items.length).toBe(4);
  });
});
