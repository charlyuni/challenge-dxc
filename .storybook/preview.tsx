import { CssBaseline, ThemeProvider } from '@mui/material';
import { DecoratorFn } from '@storybook/react';
import React from 'react';
import { theme } from '../src/theme';
import { useMemo } from 'react';

import '@fontsource/lato/100.css';
import '@fontsource/lato/300.css';
import '@fontsource/lato/400.css';
import '@fontsource/lato/700.css';
import '@fontsource/lato/900.css';
import '@fontsource/material-icons';

export const parameters = {
	actions: { argTypesRegex: '^on[A-Z].*' },
	controls: {
		expanded: true, // Adds the description and default columns
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
};

const THEMES = {
	light: theme,
	dark: theme,
};

export const globalTypes = {
	theme: {
		name: 'Theme',
		title: 'Theme',
		description: 'Theme for your components',
		defaultValue: 'light',
		toolbar: {
			icon: 'paintbrush',
			dynamicTitle: true,
			items: [
				{ value: 'light', left: '☀️', title: 'Light mode' },
				{ value: 'dark', left: '🌙', title: 'Dark mode' },
			],
		},
	},
};

const withTheme: DecoratorFn = (StoryFn, context) => {
	// The theme global we just declared
	const { theme: themeKey } = context.globals;

	// only recompute the theme if the themeKey changes
	const theme = useMemo(() => THEMES[themeKey] || THEMES['light'], [themeKey]);

	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<StoryFn />
		</ThemeProvider>
	);
};

// export all decorators that should be globally applied in an array
export const decorators = [withTheme];
