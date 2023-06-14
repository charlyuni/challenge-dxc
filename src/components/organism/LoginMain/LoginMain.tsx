import { Box, Container } from '@mui/material';
import { useState } from 'react';

import LoginFormGuest from '../../molecules/LoginForm/LoginFormGuest/LoginFormGuest';
import LoginFormUser from '../../molecules/LoginForm/LoginFormUser/LoginFormUser';
import { styles } from './styles';

export interface ILoginMainProps {
	page: string;
}

const LoginMain = () => {
	const [typeLogin, setTypeLogin] = useState('user');

	return (
		<Container maxWidth='sm' disableGutters>
			<Box sx={styles.root}>
				{typeLogin === 'user' ? (
					<LoginFormUser
						title='Iniciar sesión'
						bottomTextMain='Ingresar'
						bottomTextSecondary='¿Ingresar como invitado?'
						setTypeLogin={setTypeLogin}
						typeLogin={typeLogin}
					/>
				) : (
					<LoginFormGuest
						title='Ingresar como invitado'
						bottomTextMain='Ingresar'
						bottomTextSecondary='¿Ingresar como usuario?'
						setTypeLogin={setTypeLogin}
						typeLogin={typeLogin}
					/>
				)}
			</Box>
		</Container>
	);
};

export default LoginMain;
