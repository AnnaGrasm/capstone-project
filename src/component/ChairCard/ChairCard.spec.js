import {render, screen} from '@testing-library/react';

import ChairCard from './ChairCard';

describe('ChairCard', () => {
  it('renders chair name and chair image', () => {
    render(<ChairCard alt="Wishbone Chair" mainImg='./img/fauteuil-chair.jpeg' name="Wishbone Chair"  />);

    const chairList = screen.getByRole('chair-item');
    const imgChair= screen.getByAltText(/Wishbone Chair/i)
    
    expect(chairList).toBeInTheDocument();
    expect(imgChair).toBeInTheDocument();
    expect(imgChair).toHaveAttribute('src', './img/fauteuil-chair.jpeg')
    
    
  });

  


});
