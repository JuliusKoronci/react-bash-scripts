const getTemplate = (name) => {
	const nameLower = name.toLowerCase();
	const nameUpper = name.toUpperCase();
	return (`// @flow
import { ${nameLower}Actions } from '../constants/${name}Constants';
import { handleActions } from 'redux-actions';
import { pkclListResponseValidate } from '../../../utils/responseValidator';
import updeep from 'updeep';

const _success = {
	next(state, action) {
		if (!pkclListResponseValidate('${nameLower}Reducer', action.payload)) {
			return state;
		}
		return {
			...state,
			isFetching: false,
			error     : false,
			loaded    : true,
			${name}   : action.payload,
		};
	},
};
const _loadMore = {
	next(state, action) {
		if (!pkclListResponseValidate('${nameLower}Reducer', action.payload)) {
			return state;
		}
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
				},
			}, state);
	},
};
const _error = {
	next(state) {
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

export const initialState = {
	isFetching : false,
	error      : false,
	loaded     : false,
	${name}    : {
		'data': [],
		'pageMetaData': {
			'size': 1,
			'page': 1,
			'moreRows': false,
		},
	},
};

export default handleActions(${nameLower}Reducer, initialState);

`
	);
};

export default getTemplate;
