import { render, screen } from '@testing-library/react';
import { Footer } from '../components/Global/Footer';

test('renders Footer component', () => {
  render(<Footer />);
  const footerElement = screen.getByText(/This is Footer part/i);
  expect(footerElement).toBeInTheDocument();
});