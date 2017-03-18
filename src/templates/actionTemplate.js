const getTemplate = (name) => {
	return (`// @flow
import { createAction } from 'redux-actions';

`
	);
};

export default getTemplate;
