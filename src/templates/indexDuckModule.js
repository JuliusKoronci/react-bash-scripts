import { firstLetterToLower } from '../utils/firstToLower';
const getTemplate = (name) => {
	const lowerCaseName = firstLetterToLower(name);
	return (
		`import ${lowerCaseName}Reducer, { REDUCER_NAME as ${lowerCaseName}ReducerName } from './ducks/${name}Duck';
import ${name} from './containers/${name}';

export { ${name}, ${lowerCaseName}Reducer, ${lowerCaseName}ReducerName };
`
	);
};

export default getTemplate;
