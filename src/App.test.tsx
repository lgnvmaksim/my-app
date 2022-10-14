import React from 'react';
import { render } from '@testing-library/react';
import Sudents from './homework-PS.1/Sudents';

test('renders learn react link', () => {
  const { getByText } = render(<Sudents />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
