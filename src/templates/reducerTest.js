const getTemplate = (name) => {
	const nameLower = name.toLowerCase();
	const nameUpper = name.toUpperCase();
	return (`// @flow
import ${nameLower}Reducer, { initialState } from '../${name}Reducer';
import { ${nameLower}Actions } from '../../constants/${name}Constants';

describe('${nameLower}Reducer', () => {
	it('return initial state', () => {
		expect(${nameLower}Reducer(undefined, { type: 'unknown' })).toEqual(initialState);
	});
	it('set error to true if error dispatched', () => {
		expect(${nameLower}Reducer(undefined, { type: ${nameLower}Actions.${nameUpper}_ERROR }).error === true).toBeTruthy();
	});
	it('set loading to false if error dispatched', () => {
		expect(${nameLower}Reducer(undefined, { type: ${nameLower}Actions.${nameUpper}_ERROR }).isFetching === false).toBeTruthy();
	});
	it('set loading to true if request dispatched', () => {
		expect(${nameLower}Reducer(undefined, {
				type: ${nameLower}Actions.${nameUpper}_REQUEST,
			}).isFetching === true).toBeTruthy();
	});
	it('set loaded to true if loadMore dispatched', () => {
		expect(${nameLower}Reducer(undefined, { 
			type: ${nameLower}Actions.${nameUpper}_SUCCESS_LOADMORE,
			payload: initialState.${name},
		}).loaded === true).toBeTruthy();
	});
	it('set loaded to true if success dispatched', () => {
		expect(${nameLower}Reducer(undefined, { 
			type: ${nameLower}Actions.${nameUpper}_SUCCESS,
			payload: initialState.${name},
		 }).loaded === true).toBeTruthy();
	});
	it('results should match payload if success dispatched with payload', () => {
		let payload = {
			...initialState,
			${name}: {
				...initialState.${name},
				data: [
					{
						test: 'test'
					}
				]
			}
		};
		expect(${nameLower}Reducer(initialState, {
			type: ${nameLower}Actions.${nameUpper}_SUCCESS,
			payload: payload.${name}
		}).${name}).toEqual(payload.${name});
	});
});
`
	);
};

export default getTemplate;
