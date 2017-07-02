import { firstLetterToLower } from '../utils/firstToLower';
const getTemplate = (name) => {
	return (`// @flow
import { handleActions } from 'redux-actions';
import { createStandardReducer, baseInitialState } from '../../../utils/redux';
import { createLoadAction } from '../../../utils/reduxActions';

export const REDUCER_NAME = '${firstLetterToLower(name)}';

export const URL_KEY = '${name}';

export const actions = {
	loadExtData: createLoadAction(REDUCER_NAME, URL_KEY),
};

export default handleActions(createStandardReducer(REDUCER_NAME), baseInitialState());
`
	);
};

export default getTemplate;
