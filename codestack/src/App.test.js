import { render, screen } from '@testing-library/react';
import App from './App';

test('check itsmanibharathi is present ', () => {
  render(<App />);
  const linkElement = screen.getByText(/By itsmanibharathi/i);
  expect(linkElement).toBeInTheDocument();
});
