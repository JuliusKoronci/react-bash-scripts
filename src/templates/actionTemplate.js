const getTemplate = (name) => {
	const nameToLower = name.toLowerCase();
	const nameToUpper = name.toUpperCase();

	return (`// @flow
import { createAction } from 'redux-actions';

import { ${nameToLower}Actions } from '../constants/${name}Constants';
import { getData } from 'gef-ui-middleware-api';


export const load${name} = (id) => getData({
	endpoint: ({ urls }) => \`\${urls.${name}}/\${id}\`,
	actions: {
		onRequest: createAction(${nameToLower}Actions.${nameToUpper}_REQUEST),
		onSuccess: createAction(${nameToLower}Actions.${nameToUpper}_SUCCESS, (response) => response.json),
		onError: createAction(${nameToLower}Actions.${nameToUpper}_ERROR),
	},
});

export const loadMore${name} = (id, page) => getData({
	endpoint: ({ urls }) => \`\${urls.${name}}/\${id}?page=\${page}\`,
	actions: {
		onRequest: createAction(${nameToLower}Actions.${nameToUpper}_REQUEST),
		onSuccess: createAction(${nameToLower}Actions.${nameToUpper}_SUCCESS_LOADMORE, (response) => response.json),
		onError: createAction(${nameToLower}Actions.${nameToUpper}_ERROR),
	},
});

export const load${name}Error = () => {
	return {
		type: ${nameToLower}Actions.${nameToUpper}_ERROR
	}
};
`
	);
};

export default getTemplate;
