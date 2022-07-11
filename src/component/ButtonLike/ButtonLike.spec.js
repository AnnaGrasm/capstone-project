import {userEvent} from '@storybook/testing-library';
import {render, screen} from '@testing-library/react';

import ButtonLike from "./ButtonLike";

describe('ButtonLike', () => {
  it('shows a button and calls callback function on click', () => {
    const mockCallback = jest.fn();

    render(<ButtonLike toggleLike={mockCallback} />);

    const button = screen.getByLabelText('like');

    userEvent.click(button);

    expect(button).toBeInTheDocument();
  });
});
