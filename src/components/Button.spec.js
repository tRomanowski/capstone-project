import { render, screen } from '@testing-library/react';

import Button from './Button.js';
import userEvent from '@testing-library/user-event';

describe('Button', () => {
  it('calls Callback Function on button click', () => {
    const mockCallback = jest.fn();
    render(<Button onRandomize={mockCallback} text="Randomize" />);

    const button = screen.getByRole('button', { name: 'Randomize' });
    userEvent.click(button);

    expect(button).toBeInTheDocument();
    expect(mockCallback).toHaveBeenCalled();
  });
});
