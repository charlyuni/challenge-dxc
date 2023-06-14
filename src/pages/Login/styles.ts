import { theme } from '../../theme';

export const styles: { [key: string]: any } = {
	container: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
	boxContainer: {
		display: 'flex',
		justifyContent: 'center',
		flexDirection: 'column',
		wordWrap: 'break-word',
	},
	footer: {
		display: 'flex',
		height: '30vh',
		flexDirection: 'column',
		justifyContent: 'center',
		boxSizing: 'border-box',
		alignItems: 'center',
		width: '100%',
		color: theme.palette.background.paper,
	},
	buttonFooter: {
		fontSize: '10px',
		fontWeight: 400,
		textTransform: 'none',
		fontStyle: 'italic',
		height: '20px',
		color: theme.palette.background.paper,
		paddingLeft: '2px',
	},
	divider: {
		marginTop: '25px',
		color: theme.palette.background.default,
		'&.MuiDivider-root': {
			'&::before': {
				borderTop: `thin solid ${theme.palette.background.default}`,
			},
			'&::after': {
				borderTop: `thin solid ${theme.palette.background.default}`,
			},
		},
	},
	buttonAuthSocial: {
		position: 'relative',
		borderRadius: '10px',
		color: theme.palette.secondary.dark,
		fontWeight: 400,
		fontSize: '19px',
		lineHeight: '26px',
		letterSpacing: '0.0075em',
		fontFamily: ['Lato', 'Roboto', 'Arial'].join(','),
		backgroundColor: theme.palette.background.default,
		'&:hover': {
			color: theme.palette.background.default,
			backgroundColor: theme.palette.primary.light,
		},

		'& .MuiButton-sizeSmall': {
			paddingLeft: 48,
			paddingRight: 32,
			position: 'absolute',
			left: 20,
		},
		'& .MuiButton-startIcon': {
			position: 'absolute',
			left: 20,
		},
	},
	buttonAuthEmail: {
		backgroundColor: theme.palette.primary.light,
		borderRadius: '10px',
		fontSize: '19px',
		LineHeight: '26px',
		textTransform: 'none',
		margin: '17px 0 15px 0',
		color: theme.palette.background.paper,
		border: `0.5px solid ${theme.palette.primary.light}`,
		'&:hover': {
			color: theme.palette.secondary.dark,
			backgroundColor: theme.palette.background.default,
		},
	},
};
