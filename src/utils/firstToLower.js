export const firstLetterToLower = (text) => {
	const arr = [...text];
	const firstToLower = arr.map((item, i) => {
		if (i === 0) {
			return item.toLowerCase();
		}
		
		return item;
	});
	
	return firstToLower.join('');
};
