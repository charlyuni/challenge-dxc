import { Box, FormControl, TextField } from '@mui/material';
import { Controller, FieldError, UseFormRegister } from 'react-hook-form';

import { styles } from './styles';

export interface IControllerFormProps {
	nameVariant: string;
	label: string;
	control: any;
	register: UseFormRegister<any>;
	errors: FieldError | undefined;
	isSubmitted: boolean;
}

const ControllerForm = ({
	nameVariant,
	label,
	control,
	register,
	errors,
	isSubmitted,
}: IControllerFormProps) => {
	return (
		<Box sx={styles.boxContainer}>
			<Controller
				name={nameVariant}
				control={control}
				render={({ field }) => (
					<FormControl {...field} sx={{ width: '100%' }}>
						<TextField
							{...register(nameVariant)}
							variant='outlined'
							label={label}
							margin='normal'
							fullWidth
							autoComplete={nameVariant}
							error={
								// eslint-disable-next-line no-unneeded-ternary
								isSubmitted && errors ? true : false
							}
						/>
					</FormControl>
				)}
			/>
		</Box>
	);
};

export default ControllerForm;
