import { TypographyOptions } from '@mui/material/styles/createTypography';

export const typographies: TypographyOptions = {
	allVariants: {
		fontFamily: ['Lato', 'Roboto', 'Arial'].join(','),
	},
	generalTitle: {
		fontWeight: 700,
		fontSize: '28px',
		lineHeight: '30px',
		letterSpacing: '0.04em',
		fontFamily: ['Lato', 'Roboto', 'Arial'].join(','),
	},
	generalSubtitle: {
		fontWeight: 500,
		fontSize: '22px',
		lineHeight: '25px',
		letterSpacing: '0.04em',
		fontFamily: ['Lato', 'Roboto', 'Arial'].join(','),
	},
	generalTextSmall: {
		fontWeight: 300,
		fontSize: '14px',
		lineHeight: '18px',
		letterSpacing: '0.005em',
		fontFamily: ['Lato', 'Roboto', 'Arial'].join(','),
	},
	generalTextMedium: {
		fontWeight: 400,
		fontSize: '18px',
		lineHeight: '22px',
		letterSpacing: '0.005em',
		fontFamily: ['Lato', 'Roboto', 'Arial'].join(','),
	},
};
