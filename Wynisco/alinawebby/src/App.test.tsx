import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

// testing with typescript hmm 
test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
