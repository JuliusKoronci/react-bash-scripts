const getTemplate = (name) => {
	const nameToLower = name.toLowerCase();
	const nameToUpper = name.toUpperCase();

	return (`import * as actions from '../${name}Actions';
import { ${nameToLower}Actions } from '../../constants/${name}Constants';
import { shallow } from 'enzyme';

describe('${name}Actions', () => {
	it('should create an action to add an error', () => {
		const expectedAction = {
			type: ${nameToLower}Actions.${nameToUpper}_ERROR,
		};
		expect(actions.load${name}Error()).toEqual(expectedAction)
	})
});

`
	);
};

export default getTemplate;
