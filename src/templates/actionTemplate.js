const getTemplate = (name) => {
	const nameToLower = name.toLowerCase();
	const nameToUpper = name.toUpperCase();

	return (`// @flow
import { ${nameToLower}Actions } from '../constants/${name}Constants';
`
	);
};

export default getTemplate;
