import { Box, Typography, useTheme } from '@mui/material';

import { styles } from './styles';

export interface ITitleFormProps {
	title: string;
}

const TitleForm = ({ title }: ITitleFormProps) => {
	const theme = useTheme();
	return (
		<Box style={styles.boxContainer}>
			<Typography
				color={theme.palette.primary.main}
				display='block'
				variant='generalTitle'
				mb={2}
			>
				{title}
			</Typography>
		</Box>
	);
};

export default TitleForm;
