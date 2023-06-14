import { CssBaseline, ThemeProvider } from '@mui/material';
import useAuth from 'hooks/useAuth';
import { Suspense } from 'react';
import { Provider } from 'react-redux';
import { useRoutes } from 'react-router-dom';
import router from 'router';

import AppInit from './components/core/utils/AppInit';
import SuspenseLoader from './components/core/utils/SuspenseLoader';
import { store } from './redux/store';
import { theme } from './theme';

function App() {
	const content = useRoutes(router);
	const auth = useAuth();

	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Provider store={store}>
				{auth.isInitialized ? (
					<Suspense fallback={<SuspenseLoader />}>{content}</Suspense>
				) : (
					<AppInit />
				)}
			</Provider>
		</ThemeProvider>
	);
}

export default App;
