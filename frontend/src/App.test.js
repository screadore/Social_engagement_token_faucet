import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders header', () => {
  const { getByText } = render(<App />);
  const header = getByText(/Proof of Work Faucet/i);
  expect(header).toBeInTheDocument();
});
