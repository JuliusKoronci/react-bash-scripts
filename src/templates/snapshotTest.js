const getTemplate = (name) => {
	return (`import React from 'react';
import ${name} from '../${name}';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(
    <${name} />
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

`
	);
};

export default getTemplate;
