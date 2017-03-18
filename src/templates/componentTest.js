const getTemplate = (name) => {
	return (`import React from 'react';
import ${name} from '../${name}';

describe('${name}', () => {
	it('should exist', () => {
		expect(${name}).toBeDefined();
	});
});

`
	);
};

export default getTemplate;
