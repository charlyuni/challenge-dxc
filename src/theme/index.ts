import { createTheme, lighten } from '@mui/material';

import { typographies } from './typographies';

export const theme = createTheme({
	palette: {
		mode: 'light',
		background: {
			paper: '#FFFFFF',
			default: '#040404',
		},
		primary: {
			main: '#342E2C',
			light: '#666261',
		},
		warning: {
			main: '#ffc107',
		},
		error: {
			main: '#FF112D',
		},
		success: {
			main: '#2AF626',
		},
		info: {
			main: '#17a2b8',
			light: '#53566F',
		},
		secondary: {
			main: '#FFFFFF',
			light: '#979AAE',
		},
	},
	typography: typographies,
	breakpoints: {
		values: {
			xs: 0,
			sm: 600,
			md: 960,
			lg: 1280,
			xl: 1920,
		},
	},
	components: {
		MuiButton: {
			styleOverrides: {
				root: ({ ownerState, theme }) => ({
					borderRadius: '10px',
					boxShadow:
						ownerState.variant === 'contained'
							? '-1px -1px 2px rgba(31, 40, 55, 0.1)'
							: 'inherit',
					height: '50px',
					'&.Mui-disabled': {
						color: ownerState.variant === 'text' ? 'grey' : 'black',
						backgroundColor:
							ownerState.variant === 'text'
								? 'inherit'
								: lighten(theme.palette.primary.light, 0.65),
					},
				}),
				text: ({ ownerState }) => ({
					color: ownerState.variant === 'text' ? '#1853C0' : 'grey',
					textTransform: ownerState.variant === 'text' ? 'none' : 'inherit',
				}),
				endIcon: ({ ownerState }) =>
					ownerState.fullWidth
						? { position: 'absolute', top: 16, right: 10 }
						: null,
				startIcon: ({ ownerState }) =>
					ownerState.fullWidth
						? { position: 'absolute', top: 16, left: 15 }
						: null,
			},
			defaultProps: {
				fullWidth: true,
			},
		},
	},
});

export default theme;
