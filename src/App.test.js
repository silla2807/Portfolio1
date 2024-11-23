import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Silla text', () => {
  render(<App />);
  const textElement = screen.getByText(/Silla/i); // Case-insensitive match for "Silla"
  expect(textElement).toBeInTheDocument();
});
