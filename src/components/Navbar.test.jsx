// Navbar.test.js
import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom'; // Import jest-dom to use toBeInTheDocument
import Navbar from '../components/Navbar';

jest.mock('next/router', () => ({
  useRouter: () => ({
    pathname: '/',
  }),
}));

test('Navbar titles match', () => {
  const { getByText } = render(<Navbar />);
  
  // Search only in the desktop navigation links
  expect(getByText('Home', { selector: '.hidden.md\\:flex a' })).toBeInTheDocument();
  expect(getByText('About', { selector: '.hidden.md\\:flex a' })).toBeInTheDocument();
  expect(getByText('Services', { selector: '.hidden.md\\:flex a' })).toBeInTheDocument();
  expect(getByText('Contact', { selector: '.hidden.md\\:flex a' })).toBeInTheDocument();
});
