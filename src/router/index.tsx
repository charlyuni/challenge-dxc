import accountRoutes from './account';
import baseRoutes from './base';
import playersRoutes from './players';

const router = [
	{
		path: 'account',
		children: accountRoutes,
	},
	{
		path: 'list',
		children: playersRoutes,
	},
	{
		path: '*',
		children: baseRoutes,
	},
];

export default router;
