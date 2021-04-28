import { render, screen } from '@testing-library/react';
import App from './App';

test('renders companies', () => {
  render(<App />);
  const linkElement = screen.getByText(/companies/i);
  expect(linkElement).toBeInTheDocument();
});
