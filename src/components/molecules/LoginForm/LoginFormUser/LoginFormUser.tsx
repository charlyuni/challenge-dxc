import { yupResolver } from '@hookform/resolvers/yup';
import { Box } from '@mui/material';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';

import useAuth from '../../../../hooks/useAuth';
import AlertDialog from '../../../atoms/AlertDialog/AlertDialog';
import TitleForm from '../../../atoms/TitleForm/TitleForm';
import ButtonForm from '../ButtonForm/ButtonForm';
import ControllerForm from '../ControllerForm/ControllerForm';
import { styles } from './styles';

export interface ILoginFormUserProps {
	title: string;
	bottomTextMain: string;
	bottomTextSecondary: string;
	setTypeLogin: (typeLogin: string) => void;
	typeLogin: string;
}

export interface IFormInputs {
	emailUser: string;
	passwordUser: string;
}

const yupSchema = yup.object({
	emailUser: yup
		.string()
		.email('Ingresa un correo válido')
		.required('Ingresa tu correo'),
	passwordUser: yup.string().required('Ingresa tu contraseña'),
});

const LoginFormUser = ({
	title,
	typeLogin,
	bottomTextMain,
	bottomTextSecondary,
	setTypeLogin,
}: ILoginFormUserProps) => {
	const { isAuthenticated, loginUser, error } = useAuth();
	const [hasError, setError] = useState(false);
	const navigate = useNavigate();
	useEffect(() => {
		setTimeout(() => {
			setError(false);
		}, 3000);
	}, [hasError]);

	const {
		control,
		register,
		handleSubmit,
		formState: { errors, isValid, isSubmitting, isSubmitted },
	} = useForm<IFormInputs>({
		mode: 'all',
		resolver: yupResolver(yupSchema),
	});

	const onSubmit = handleSubmit(async (data) => {
		loginUser(data.emailUser, data.passwordUser);
	});

	useEffect(() => {
		if (isAuthenticated) {
			navigate('/list/songs');
		}
		console.log(isAuthenticated);
	}, [isAuthenticated]);

	return (
		<>
			<TitleForm title={title} />
			<form onSubmit={onSubmit} style={styles.form}>
				<Box p={2}>
					<ControllerForm
						nameVariant='emailUser'
						label='Ingrese su usuario'
						control={control}
						register={register}
						errors={errors.emailUser}
						isSubmitted={isSubmitted}
					/>

					<ControllerForm
						nameVariant='passwordUser'
						label='Ingrese su contraseña'
						control={control}
						register={register}
						errors={errors.passwordUser}
						isSubmitted={isSubmitted}
					/>

					<ButtonForm
						variant='contained'
						type='submit'
						bottomText={bottomTextMain}
						isSubmitting={isSubmitting}
						isValid={isValid}
					/>
					<ButtonForm
						variant='text'
						type='button'
						bottomText={bottomTextSecondary}
						isSubmitting={isSubmitting}
						isValid={isValid}
						setTypeLogin={setTypeLogin}
						typeLogin={typeLogin}
					/>
				</Box>
				{error && (
					<AlertDialog
						type='error'
						title='Error'
						subtitle='Usuario o contraseña incorrectos'
					/>
				)}
			</form>
		</>
	);
};

export default LoginFormUser;
