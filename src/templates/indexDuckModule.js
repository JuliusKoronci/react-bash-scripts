import { firstLetterToLower } from '../utils/firstToLower';
const getTemplate = (name) => {
	const lowerCaseName = firstLetterToLower(name);
	return (
		`import ${lowerCaseName}Reducer from './ducks/${name}Duck';
import ${name} from './containers/${name}';

export { ${name} };
export { ${lowerCaseName}Reducer };
`
	);
};

export default getTemplate;
