const getTemplate = (name) => {
	const lowerCaseName = name.toLowerCase();
	return (
`import ${lowerCaseName}Reducer from './reducers/${lowerCaseName}Reducer';
export { ${lowerCaseName}Reducer };
`
	);
};

export default getTemplate;
