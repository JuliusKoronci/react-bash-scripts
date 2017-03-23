const getTemplate = (name) => {
	const nameLower = name.toLowerCase();
	const nameUpper = name.toUpperCase();
	return (`// @flow
import { ${nameLower}Actions } from '../constants/${name}Constants';
import { handleActions } from 'redux-actions';
import updeep from 'updeep';

const _success = {
	next(state, action) {
		return updeep(
			{
				isFetching: false,
				error     : false,
				loaded    : true,
				${name}   : action.payload
			}, state);
	},
};
const _error = {
	throw(state) {
		return updeep(
			{
				isFetching: false,
				error     : true,
			}, state);
	},
};

const _request = {
	next(state, action) {
		return updeep(
			{
				isFetching : true,
				error      : false,
				loaded     : false,
			}, state);
	},
};

const ${nameLower}Reducer = {
	[${nameLower}Actions.${nameUpper}_REQUEST]          : _request,
	[${nameLower}Actions.${nameUpper}_SUCCESS]          : _success,
	[${nameLower}Actions.${nameUpper}_ERROR]            : _error,
};

export default handleActions(${nameLower}Reducer, {
	isFetching : false,
	error      : false,
	loaded     : false,
	${name}    : {},
});

`
	);
};

export default getTemplate;
