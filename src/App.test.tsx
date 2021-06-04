import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders TrekDex', () => {
  render(<App />);
  const trekDex = screen.getByText(/TrekDex/i);
  expect(trekDex).toBeInTheDocument();
});
