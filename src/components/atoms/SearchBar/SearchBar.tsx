import CloseIcon from '@mui/icons-material/Close';
import SendIcon from '@mui/icons-material/Send';
import {
	Box,
	Fade,
	IconButton,
	TextField,
	TextFieldProps,
	useTheme,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import React, { useState } from 'react';

import { styles } from './styles';

export interface ISearchBar {
	placeholder?: string;
	inputVisibility: boolean;
	suggestions: string[];
	handleClickSearchBar?: () => void;
	value: string;
	setValue: (value: string) => void;
	onClickClose: () => void;
}

const InputCustom = styled(TextField)<TextFieldProps>(() => ({
	...styles.customInput,
}));

const SearchBar: React.FC<ISearchBar> = ({
	placeholder,
	inputVisibility,
	suggestions,
	handleClickSearchBar,
	value,
	setValue,
	onClickClose,
}) => {
	const theme = useTheme();
	const [searchResult, setSearchResult] = useState([] as string[]);

	const handleChanges = (event: React.ChangeEvent<HTMLInputElement>) => {
		setValue(event.target.value);
		event.target.value.length > 3 &&
			setSearchResult(
				suggestions
					.filter((item) =>
						item.toLowerCase().includes(event.target.value.toLowerCase())
					)
					.slice(0, 3)
			);
	};

	return (
		<Fade in={inputVisibility}>
			<Box
				sx={{
					...styles.container,
					minHeight:
						value && value.length > 3 && searchResult.length > 0
							? `calc((${searchResult.length + 1}*20px) + 120px)`
							: '106px',
					bottom: theme.spacing(25),
				}}
			>
				<IconButton
					sx={styles.iconButton}
					size='small'
					onClick={() => {
						setValue('');
					}}
				>
					<CloseIcon
						style={styles.iconClose}
						onClick={onClickClose}
						data-testid='close'
					/>
				</IconButton>
				<Box
					sx={{
						...styles.boxContrast,
						minHeight:
							value && value.length > 3 && searchResult.length > 0
								? `calc((${searchResult.length + 1}*20px) + 120px)`
								: '106px',
					}}
				>
					<Box
						sx={{
							...styles.boxCustomer,
							minHeight:
								value && value.length > 3 && searchResult.length > 0
									? `calc((${searchResult.length + 1}*20px) + 120px)`
									: '106px',
							backgroundColor: theme.palette.primary.main,
						}}
					/>
				</Box>
				<Box sx={styles.containerInput}>
					<InputCustom
						sx={{
							borderColor: theme.palette.primary.main,
							visibility: inputVisibility ? 'visible' : 'hidden',
							padding: '0 !important',
							boxShadow:
								'-1px 3px 5px rgba(50, 45, 45, 0.15), 1px -3px 5px rgba(50, 45, 45, 0.1)',
						}}
						variant='outlined'
						placeholder={placeholder}
						value={value}
						onChange={handleChanges}
						InputProps={{
							endAdornment: (
								<IconButton
									sx={{ top: '-8px' }}
									size='small'
									onClick={handleClickSearchBar}
									disabled={value.length < 1}
								>
									<SendIcon style={styles.sendIcon} />
								</IconButton>
							),
						}}
					/>
				</Box>
			</Box>
		</Fade>
	);
};

export default SearchBar;
