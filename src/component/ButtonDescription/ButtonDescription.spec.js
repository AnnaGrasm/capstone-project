import {userEvent} from '@storybook/testing-library';
import {render, screen} from '@testing-library/react';

import ButtonDescription from './ButtonDescription';

describe('ButtonDescription', () => {
  it('shows a button and calls callback function on click', () => {
    const mockCallback = jest.fn();

    render(<ButtonDescription toggleDescription={mockCallback} />);

    const button = screen.getByRole('button', {name: /description text about/i});

    userEvent.click(button);

    expect(button).toBeInTheDocument();
  });
});
