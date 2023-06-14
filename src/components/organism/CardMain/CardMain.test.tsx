import { render, screen } from '@testing-library/react';
import { Provider as StoreProvider } from 'react-redux';

import { store } from '../../../redux/store';
import CardMain from './CardMain';

describe('CardMain', () => {
	test('renders CardMain component', () => {
		render(
			<StoreProvider store={store}>
				<CardMain />
			</StoreProvider>
		);

		expect(screen.getByText('Listado de canciones')).toBeInTheDocument();
		expect(screen.queryByText('example')).not.toBeInTheDocument();
	});
});
