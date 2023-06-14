import '@mui/material/styles';
import React from 'react';

declare module '@mui/material/styles' {
	interface TypographyVariants {
		generalTitle: React.CSSProperties;
		generalTextMedium: React.CSSProperties;
		generalTextSmall: React.CSSProperties;
		generalSubtitle: React.CSSProperties;
	}

	interface TypographyVariantsOptions {
		generalTitle?: React.CSSProperties;
		generalTextMedium?: React.CSSProperties;
		generalTextSmall?: React.CSSProperties;
		generalSubtitle?: React.CSSProperties;
	}
}

declare module '@mui/material/Typography' {
	interface TypographyPropsVariantOverrides {
		generalTitle: true;
		generalTextMedium: true;
		generalTextSmall: true;
		generalSubtitle: true;
	}
}
