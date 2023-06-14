import React from 'react';

import theme from '../../../theme/index';

export const styles: { [key: string]: React.CSSProperties } = {
	root: {
		width: '100%',
		backgroundColor: theme.palette.background.paper,
		height: '50vh',
		borderRadius: '10px',
		[theme.breakpoints.down('sm')]: {
			marginTop: '0',
			height: '100vh',
			borderRadius: '0',
		},
	},
};
