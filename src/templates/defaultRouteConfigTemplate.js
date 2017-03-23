const getTemplate = () => {
	return (`export default [
  {
    path: '/',
    component: 'Layout',
    dir: './pages',
    indexRoute: false,
    name: 'layout',
    children: [],
  }
];

`
	);
};

export default getTemplate;
