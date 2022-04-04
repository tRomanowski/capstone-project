import { render, screen, within } from '@testing-library/react';

import Recipe from './Recipe.js';

describe('Recipe', () => {
  it('renders a Card with a title, an image, some text, missing ingredients headline, an unordered list with 4 items and an anchor Element', () => {
    render(
      <Recipe
        title="Test Title"
        text={'lorem ipsum'}
        missingIngredients={['apple', 'banana', 'peach', 'kiwi']}
      />
    );

    const title = screen.getByText('Title', { exact: false });
    expect(title).toBeInTheDocument();

    const image = screen.getByRole('img');
    expect(image).toBeInTheDocument();

    const text = screen.getByText('lorem', { exact: false });
    expect(text).toBeInTheDocument();

    const missTitle = screen.getByText('missing ingredients', { exact: false });
    expect(missTitle).toBeInTheDocument();

    const list = screen.getByRole('list', { name: /missing ingredients/i });

    const { getAllByRole } = within(list);
    const items = getAllByRole('listitem');
    expect(items.length).toBe(4);

    const Instructions = screen.getByText('Instructions', { exact: false });
    expect(Instructions).toBeInTheDocument();
  });
});
