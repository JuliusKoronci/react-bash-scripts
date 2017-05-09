const getTemplate = (name) => {
	const lowerCaseName = name.toLowerCase();
	return (
`import ${lowerCaseName}Reducer from './reducers/${name}Reducer';
export { ${lowerCaseName}Reducer };
`
	);
};

export default getTemplate;
