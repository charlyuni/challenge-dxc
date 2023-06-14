import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import LoginMain from './LoginMain';

describe('LoginMain', () => {
	test('renders LoginFormUser by default', () => {
		render(
			<BrowserRouter>
				<LoginMain />
			</BrowserRouter>
		);
		expect(screen.getByText('Iniciar sesión')).toBeInTheDocument();
		expect(screen.getByText('Ingresar')).toBeInTheDocument();
		expect(screen.getByText('¿Ingresar como invitado?')).toBeInTheDocument();
	});

	test('switches to LoginFormGuest on button click', () => {
		render(
			<BrowserRouter>
				<LoginMain />
			</BrowserRouter>
		);
		const switchButton = screen.getByText('¿Ingresar como invitado?');
		fireEvent.click(switchButton);
		expect(screen.getByText('Ingresar como invitado')).toBeInTheDocument();
		expect(screen.getByText('Ingresar')).toBeInTheDocument();
		expect(screen.getByText('¿Ingresar como usuario?')).toBeInTheDocument();
	});
});
