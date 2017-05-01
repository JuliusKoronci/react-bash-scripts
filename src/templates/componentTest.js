const getTemplate = (name) => {
	return (`import React from 'react';
import ${name} from '../${name}';
import { shallow } from 'enzyme';

const wrapper = shallow(<${name} />);

describe('${name}', () => {
	it('should exist', () => {
		expect(${name}).toBeDefined();
	});
	it('renders without issues', () => {
		expect(wrapper.length).toBe(1);
	});
	
	// Test if child component is present
	//it('should render one ChildComponent component', () => {
	//	expect(wrapper.find(ChildComponent).length).toBe(1);
	//});
});

`
	);
};

export default getTemplate;
