import React from 'react';

import Guest from '../components/core/utils/Guest';

// Auth
const LoginPage = React.lazy(() => import('../pages/Login'));

const accountRoutes = [
	{
		path: 'login',
		element: (
			<Guest>
				<LoginPage />
			</Guest>
		),
	},
];

export default accountRoutes;
