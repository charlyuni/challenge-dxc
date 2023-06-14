import {
	Button as MuiButton,
	ButtonProps as MuiButtonProps,
	Typography,
} from '@mui/material';

type ButtonBaseProps = Pick<
	MuiButtonProps,
	| 'variant'
	| 'size'
	| 'color'
	| 'fullWidth'
	| 'endIcon'
	| 'startIcon'
	| 'disabled'
	| 'disableRipple'
	| 'sx'
	| 'onClick'
	| 'type'
>;

export interface IButtonProps extends ButtonBaseProps {
	text: string;
}

const Button = ({ text, ...rest }: IButtonProps) => (
	<MuiButton {...rest}>
		<Typography variant='generalTextMedium'>{text}</Typography>
	</MuiButton>
);

export default Button;
