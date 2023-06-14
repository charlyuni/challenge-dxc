import { Box } from '@mui/material';

import Button from '../../../atoms/Button/Button';
import { styles } from './styles';

export interface IButtonFormProps {
	variant: 'text' | 'outlined' | 'contained' | undefined;
	type: 'button' | 'submit' | 'reset' | undefined;
	bottomText: string;
	isSubmitting: boolean;
	isValid: boolean;
	setTypeLogin?: (type: string) => void;
	typeLogin?: string;
}

const ButtonForm = ({
	variant,
	type,
	typeLogin,
	bottomText,
	isSubmitting,
	isValid,
	setTypeLogin,
}: IButtonFormProps) => {
	return (
		<Box
			sx={styles.boxContainer}
			onClick={() =>
				setTypeLogin && setTypeLogin(typeLogin === 'user' ? 'guest' : 'user')
			}
		>
			<Button
				type={type}
				variant={variant}
				disabled={type === 'submit' ? isSubmitting || !isValid : false}
				sx={styles.button}
				text={bottomText}
			/>
		</Box>
	);
};

export default ButtonForm;
