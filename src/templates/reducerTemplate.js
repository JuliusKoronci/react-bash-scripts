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
				${name}   : action.payload,
			}, state);
	},
};
const _loadMore = {
	next(state, action) {
		const prevData = state.${name}.data;
		return updeep(
			{
				isFetching: false,
				error: false,
				loaded: true,
				${name}: {
					data: [
						...prevData,
						...action.payload.data,
					],
					pageMetaData: action.payload.pageMetaData,
				}
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
	[${nameLower}Actions.${nameUpper}_SUCCESS_LOADMORE]: _loadMore,
};

export default handleActions(${nameLower}Reducer, {
	isFetching : false,
	error      : false,
	loaded     : false,
	${name}    : {
		"data": [],
		"pageMetaData": {
			"size": 1,
			"page": 1,
			"moreRows": false,
		},
	},
});

`
	);
};

export default getTemplate;
