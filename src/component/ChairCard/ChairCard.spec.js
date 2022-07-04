import {render, screen} from '@testing-library/react';

import ChairCard from './ChairCard';

describe('ChairList', () => {
  it('renders chair name, chair image und a button', () => {
    render(<ChairCard name="Wishbone Chair" description="When designing the CH24 chair"  />);

    const chairList = screen.getByRole('chair-item');
    const img = screen.getByRole('img');
    expect(chairList).toBeInTheDocument();
    expect(img).toBeInTheDocument();
  });


});
