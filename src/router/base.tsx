import { Navigate } from 'react-router-dom';

const baseRoutes = [
	{
		path: '*',
		element: <Navigate to='/account/login' replace />,
	},
];

export default baseRoutes;
