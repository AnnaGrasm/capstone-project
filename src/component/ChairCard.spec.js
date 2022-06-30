import {render, screen} from '@testing-library/react';

import ChairCard from './ChairCard';

describe('ChairList', () => {
  it('renders chair name, chair image und a button', () => {
    render(<ChairCard name="Wishbone Chair" description="When designing the CH24 chair" />);

    const name = screen.getByText(/Wishbone Chair/i);
    const img = screen.getByAltText('Wishbone Chair');
    const description = screen.getByText(/When designing the CH24 chair/i);

    expect(name).toBeInTheDocument();
    expect(img).toBeInTheDocument();
    expect(description).toBeInTheDocument();
  });
});
