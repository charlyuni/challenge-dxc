import React from 'react';

import Autehnticated from '../components/core/utils/Authenticated';

// Auth
const RandomSongs = React.lazy(() => import('../pages/ArtistPage'));
const HomePage = React.lazy(() => import('../pages/Home'));

const playersRoutes = [
	{
		path: 'songs',
		element: (
			<Autehnticated>
				<HomePage />
			</Autehnticated>
		),
	},
	{
		path: 'artists',
		element: (
			<Autehnticated>
				<RandomSongs />
			</Autehnticated>
		),
	},
	{
		path: 'players/:name',
		element: (
			<Autehnticated>
				<RandomSongs />
			</Autehnticated>
		),
	},
];

export default playersRoutes;
