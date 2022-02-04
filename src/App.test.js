import { render, screen } from '@testing-library/react';
import App from './App';

test('Conspiracy', () => {
  render(<App />);
  const linkElement = screen.getByText(/Conspiracy/i);
  expect(linkElement).toBeInTheDocument();
});
