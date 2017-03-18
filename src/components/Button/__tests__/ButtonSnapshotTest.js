import React from 'react';
import Button from '../Button';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(
    <Button />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

