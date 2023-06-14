import { yupResolver } from '@hookform/resolvers/yup';
import { Box } from '@mui/material';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

import useAuth from '../../../../hooks/useAuth';
import AlertDialog from '../../../atoms/AlertDialog/AlertDialog';
import TitleForm from '../../../atoms/TitleForm/TitleForm';
import ButtonForm from '../ButtonForm/ButtonForm';
import ControllerForm from '../ControllerForm/ControllerForm';
import { styles } from './styles';

export interface ILoginFormUserProps {
	title: string;
	typeLogin: string;
	bottomTextMain: string;
	bottomTextSecondary: string;
	setTypeLogin: (type: string) => void;
}

export interface IFormInputs {
	tokenGuest: string;
}

const yupSchema = yup.object({
	tokenGuest: yup.string().required('Ingresa tu token'),
});

const LoginFormGuest = ({
	title,
	typeLogin,
	bottomTextMain,
	bottomTextSecondary,
	setTypeLogin,
}: ILoginFormUserProps) => {
	const { loginGuest, error } = useAuth();
	const {
		control,
		register,
		handleSubmit,
		formState: { errors, isValid, isSubmitting, isSubmitted },
	} = useForm<IFormInputs>({
		mode: 'all',
		resolver: yupResolver(yupSchema),
	});

	const onSubmit = handleSubmit((data) => {
		loginGuest(data.tokenGuest);
	});

	return (
		<>
			<TitleForm title={title} />
			<form onSubmit={onSubmit} style={styles.form}>
				<Box p={2}>
					<ControllerForm
						nameVariant='tokenGuest'
						label='Ingrese su token'
						control={control}
						register={register}
						errors={errors.tokenGuest}
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
			</form>
			{error && (
				<AlertDialog type='error' title='Error' subtitle='Token incorrecto' />
			)}
		</>
	);
};

export default LoginFormGuest;
