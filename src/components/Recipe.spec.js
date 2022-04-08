import { render, screen, within } from '@testing-library/react';

import Recipe from './Recipe.js';
import userEvent from '@testing-library/user-event';

describe('Recipe', () => {
  it('renders a Card with a title, an image, some text, missing ingredients headline, an unordered list with 4 items, an anchor Element and two buttons', () => {
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

    const deleteButton = screen.getByRole('button', { name: 'Delete' });
    expect(deleteButton).toBeInTheDocument();

    const saveButton = screen.getByRole('button', { name: 'Save' });
    expect(saveButton).toBeInTheDocument();
  });

  it('calls a function if delete button is clicked', () => {
    const mockDelete = jest.fn();
    render(
      <Recipe
        title="Pommes"
        image="https://source.unsplash.com/random/200×300"
        text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
        url="https://developer.mozilla.org/de/"
        missingIngredients={[{ name: 'oil' }]}
        onDelete={mockDelete}
        id={1}
      />
    );

    const deleteButton = screen.getByRole('button', { name: 'Delete' });

    userEvent.click(deleteButton);

    expect(mockDelete).toHaveBeenCalled();
  });

  it('calls a function if save button is clicked', () => {
    const mockSave = jest.fn();
    render(
      <Recipe
        title="Pommes"
        image="https://source.unsplash.com/random/200×300"
        text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet."
        url="https://developer.mozilla.org/de/"
        missingIngredients={[{ name: 'oil' }]}
        onSave={mockSave}
        id={2}
      />
    );

    const saveButton = screen.getByRole('button', { name: 'Save' });

    userEvent.click(saveButton);

    expect(mockSave).toHaveBeenCalled();
  });
});
