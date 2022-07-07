import {render, screen} from '@testing-library/react';

import ChairCard from './ChairCard';

describe('ChairList', () => {
  it('renders chair name and chair image', () => {
    render(<ChairCard name="Wishbone Chair" mainImg='./img/fauteuil-chair.jpeg'  />);

    const chairList = screen.getByRole('chair-item');
    const imgChair= screen.getByRole('img', { name: 'Wishbone Chair' })
    
    expect(chairList).toBeInTheDocument();
    expect(imgChair).toBeInTheDocument();
    expect(imgChair).toHaveAttribute('src', './img/fauteuil-chair.jpeg')
    
    
  });

  


});
