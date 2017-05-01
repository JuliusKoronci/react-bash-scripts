const getTemplate = (name) => {
	const nameLower = name.toLowerCase();
	const nameUpper = name.toUpperCase();
	return (`// @flow
import { ${nameLower}Actions } from '../constants/${name}Constants';


export const initialState = {
};

const ${nameLower}Reducer = (state: Object = initialState, action: Object) => {
	switch (action.type) {
		default:
			return state;
	}
};

export default ${nameLower}Reducer;

`
	);
};

export default getTemplate;
