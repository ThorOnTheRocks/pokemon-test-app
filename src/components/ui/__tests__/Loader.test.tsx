import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Loader from '../Loader';

describe('Loader', () => {
  it('Should renders the loader correctly', () => {
    render(<Loader />);

    expect(screen.getByRole('progressbar')).toBeInTheDocument();
  });
});
