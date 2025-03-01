import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Avatar from '../Avatar';

test('renders Avatar component with default src', () => {
  const { getByAltText } = render(<Avatar />);
  const avatarElement = getByAltText(/avatar/i);
  expect(avatarElement).toBeInTheDocument();
  expect(avatarElement).toHaveAttribute('src', expect.stringMatching(/\/_next\/image\?url=%2Fimages%2Fplaceholder.jpg/));
});

test('renders Avatar component with provided src', () => {
  const testSrc = '/images/test.jpg';
  const { getByAltText } = render(<Avatar src={testSrc} />);
  const avatarElement = getByAltText(/avatar/i);
  expect(avatarElement).toBeInTheDocument();
  expect(avatarElement).toHaveAttribute('src', expect.stringMatching(/\/_next\/image\?url=%2Fimages%2Ftest.jpg/));
});