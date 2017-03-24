const getTemplate = (name) => {
	return (`import React from 'react';
import { getLabelMessage } from 'gef-ui-localization';
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
