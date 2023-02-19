import { render, screen } from '@testing-library/react';
import App, { sum } from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('function sum', () => {
  expect(sum(2,3)).toBe(5)
})
