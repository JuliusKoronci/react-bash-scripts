const getTemplate = (name) => {
	const nameLower = name.toLowerCase();
	const nameUpper = name.toUpperCase();

	return (`// @flow
import keyMirror from 'keymirror';

const ${nameLower}Actions = keyMirror({
	${nameUpper}_REQUEST: null,
	${nameUpper}_SUCCESS: null,
	${nameUpper}_ERROR: null,
});

export { ${nameLower}Actions };
export default { ${nameLower}Actions };
`
	);
};

export default getTemplate;
