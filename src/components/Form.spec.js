import { render, screen, within } from '@testing-library/react';

import Form from './Form';
import userEvent from '@testing-library/user-event';

describe('Form', () => {
  it('renders a form with the name search for recipe', () => {
    render(<Form />);

    const form = screen.getByRole('form', { name: 'search for recipe' });

    expect(form).toBeInTheDocument();
  });

  it('renders five inputfields and a button', () => {
    render(<Form />);

    const form = screen.getByRole('form', { name: 'search for recipe' });
    const { getAllByRole } = within(form);
    const items = getAllByRole('textbox');
    const button = getAllByRole('button');
    expect(button.length).toBe(1);
    expect(items.length).toBe(5);
  });

  it('submits when at least the first two inputfields are filled out and the submit button is clicked', () => {
    const handleSubmit = jest.fn();
    render(<Form onSubmitIngredients={handleSubmit} />);

    const firstInput = screen.getByLabelText('first', { exact: false });
    const secondInput = screen.getByLabelText('second', { exact: false });
    const submitButton = screen.getByRole('button');

    userEvent.type(firstInput, 'Apple');
    userEvent.type(secondInput, 'Banana');
    userEvent.click(submitButton);

    expect(handleSubmit).toHaveBeenCalledWith({
      ingredient1: 'Apple',
      ingredient2: 'Banana',
    });
  });

  it('does not submit if the first inputfield is empty and alerts', () => {
    const handleSubmit = jest.fn();
    const alertMock = jest.spyOn(window, 'alert').mockImplementation();
    render(<Form onSubmitIngredients={handleSubmit} />);

    const firstInput = screen.getByLabelText('first', { exact: false });
    const secondInput = screen.getByLabelText('second', { exact: false });
    const submitButton = screen.getByRole('button');

    userEvent.type(secondInput, 'Banana');
    userEvent.click(submitButton);

    expect(firstInput).toBeInTheDocument();
    expect(handleSubmit).not.toHaveBeenCalledWith(['Banana']);
    expect(alertMock).toHaveBeenCalledTimes(1);
  });

  it('does not submit if the second inputfield is empty and alerts', () => {
    const handleSubmit = jest.fn();
    const alertMock = jest.spyOn(window, 'alert').mockImplementation();
    render(<Form onSubmitIngredients={handleSubmit} />);

    const firstInput = screen.getByLabelText('first', { exact: false });
    const secondInput = screen.getByLabelText('second', { exact: false });
    const submitButton = screen.getByRole('button');

    userEvent.type(firstInput, 'Apple');
    userEvent.click(submitButton);

    expect(secondInput).toBeInTheDocument();
    expect(handleSubmit).not.toHaveBeenCalledWith(['Apple']);
    expect(alertMock).toHaveBeenCalledTimes(1);
  });
});
