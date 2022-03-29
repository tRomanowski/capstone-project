import { render, screen } from '@testing-library/react';

import Recipe from './Recipe.js';

describe('Recipe', () => {
  it('renders a Card with a title, an image, some text and a anchor Element', () => {
    render(<Recipe title="Test Title" text={'lorem ipsum'} />);

    const title = screen.getByText('Title', { exact: false });
    expect(title).toBeInTheDocument();

    const image = screen.getByRole('img');
    expect(image).toBeInTheDocument();

    const text = screen.getByText('lorem', { exact: false });
    expect(text).toBeInTheDocument();

    const Instructions = screen.getByText('Instructions', { exact: false });
    expect(Instructions).toBeInTheDocument();
  });
});
