const getTemplate = (name) => {
	const nameLower = name.toLowerCase();
	const nameUpper = name.toUpperCase();

	return (`// @flow

const ${nameLower}Actions = {
	${nameUpper}_REQUEST: '${nameUpper}_REQUEST',
	${nameUpper}_SUCCESS: '${nameUpper}_SUCCESS',
	${nameUpper}_SUCCESS_LOADMORE: '${nameUpper}_SUCCESS_LOADMORE',
	${nameUpper}_ERROR: '${nameUpper}_ERROR',
};

export { ${nameLower}Actions };
export default ${nameLower}Actions;
`
	);
};

export default getTemplate;
