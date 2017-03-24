const getTemplate = (name) => {
	return (`import React from 'react';
import ${name} from '../${name}';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

const wrapper = shallow(<${name} />);
describe('(Component) ${name}', () => {
	it('Should match snapshot', () => {
		expect(toJson(wrapper)).toMatchSnapshot();
	});
});

`
	);
};

export default getTemplate;
