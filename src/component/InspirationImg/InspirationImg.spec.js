import {render, screen} from '@testing-library/react';

import InspirationImg from './InspirationImg';

describe('InspirationImg', () => {
  it('renders inspiration image', () => {
    render(<InspirationImg inspirationImg1="./img/chair-one-img1.jpeg" />);

    const inspirationImg = screen.getByRole('img', {name: 'first inspiration'});

    expect(inspirationImg).toBeInTheDocument();
    expect(inspirationImg).toHaveAttribute('src', './img/chair-one-img1.jpeg');
  });
});
