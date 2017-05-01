const getTemplate = (name) => {
	return (
		`import ${name} from './${name}';
export default ${name};
		`
	);
};

export default getTemplate;
