import {render, screen} from '@testing-library/react';

import DesignerLink from './DesignerLink';

describe('DesignerLink', () => {
  it('Link to a Wikipedia page', () => {
    const designer = 'Hans J. Wegner';
    const designerURL = 'https://en.wikipedia.org/wiki/Hans_Wegner';

    render(<DesignerLink designer={designer} designerURL={designerURL} />);

    const designerName = screen.getByText(designer);
    const link = screen.getByRole('link');

    expect(designerName).toBeInTheDocument();
    expect(link).toHaveAttribute('href', 'https://en.wikipedia.org/wiki/Hans_Wegner');
  });
});
