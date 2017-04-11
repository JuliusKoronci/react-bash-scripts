
const getTemplate = (name) => {
	return (`import React from 'react';
import ${name} from '../${name}';
import { shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import toJson from 'enzyme-to-json';

const middlewares = [];
const mockStore = configureStore(middlewares);

// Initialize mockstore with empty state
const initialState = {};
const store = mockStore(initialState);

const wrapper = shallow(<${name} store={store} />);
describe('(Component) ${name}', () => {
	it('Should match snapshot', () => {
		expect(toJson(wrapper)).toMatchSnapshot();
	});
});

`
	);
};

export default getTemplate;
