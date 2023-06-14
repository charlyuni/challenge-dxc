import theme from '../../../theme';

/* eslint-disable  @typescript-eslint/no-explicit-any */
export const styles: { [key: string]: any } = {
	container: {
		marginTop: '1px',
		textAlign: 'right',
		width: '100%',
	},
	icon: {
		color: theme.palette.primary.light,
		width: '44px',
		height: '44px',
		boxshadow:
			'-1px 3px 5px rgba(50, 45, 45, 0.15), 1px -3px 5px rgba(50, 45, 45, 0.1)',
	},
	searchIcon: {
		color: theme.palette.primary.light,
	},
};
