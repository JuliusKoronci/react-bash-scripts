const getTemplate = (name) => {
	return (
		`export default from './${name}';`
	);
};

export default getTemplate;
