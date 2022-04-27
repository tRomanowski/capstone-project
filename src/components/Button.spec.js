import { render, screen } from '@testing-library/react';

import Button from './Button.js';
import userEvent from '@testing-library/user-event';

describe('Button', () => {
  it('calls Function on button click', () => {
    const mockCallback = jest.fn();
    render(<Button onClick={mockCallback} text="Randomize" />);

    const button = screen.getByRole('button');
    userEvent.click(button);

    expect(button).toBeInTheDocument();
    expect(mockCallback).toHaveBeenCalled();
  });
});
