import { firstLetterToLower } from '../utils/firstToLower';
const getTemplate = (name) => {
	return (`// @flow
import { handleActions } from 'redux-actions';
import { createStandardReducer, baseInitialState } from '../../../utils/redux';
import { createLoadAction } from '../../../utils/reduxActions';

const NAME = '${firstLetterToLower(name)}';

const URL_KEY = '${name}';

export const actions = {
	loadExtData: createLoadAction(NAME, URL_KEY),
};

export default handleActions(createStandardReducer(NAME), baseInitialState());
`
	);
};

export default getTemplate;
