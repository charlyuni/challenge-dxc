import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import NavBar from './NavBar';

describe('NavBar', () => {
	test('renders correctly ', () => {
		render(
			<BrowserRouter>
				<NavBar />
			</BrowserRouter>
		);

		expect(screen.getByText(`Bienvenid@!`)).toBeInTheDocument();
	});
	test('opens and closes the menu when the menu icon is clicked', () => {
		render(
			<BrowserRouter>
				<NavBar />
			</BrowserRouter>
		);
		expect(screen.queryByText('icon')).toBeNull();
		fireEvent.click(screen.getByLabelText('account of current user'));
	});
});
