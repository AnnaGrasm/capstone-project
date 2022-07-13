import {render, screen} from '@testing-library/react';

import ChairCard from './ChairCard';

describe('ChairCard', () => {
  it('renders chair name and chair image', () => {
    render(<ChairCard chair={{name: 'Wishbone Chair', imgUrl: './img/fauteuil-chair.jpeg'}} />);

    const chairList = screen.getByRole('chair-item');
    const imgChair = screen.getByAltText(/Wishbone Chair/i);

    expect(chairList).toBeInTheDocument();
    expect(imgChair).toBeInTheDocument();
    expect(imgChair).toHaveAttribute('src', './img/fauteuil-chair.jpeg');
  });
});
