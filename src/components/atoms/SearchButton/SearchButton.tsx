import SearchIcon from '@mui/icons-material/Search';
import { Box, Fab } from '@mui/material';
import React from 'react';

import { styles } from './styles';
export interface ISearchButton {
	onClick: (event: React.MouseEvent<HTMLElement>) => void;
	isVisible: boolean;
}

const SearchButton: React.FC<ISearchButton> = ({ onClick, isVisible }) => {
	return (
		<Box
			sx={{
				...styles.container,
				visibility: isVisible ? 'visible' : 'hidden',
			}}
		>
			<Fab
				sx={styles.icon}
				onClick={onClick}
				color='secondary'
				aria-label='add'
			>
				<SearchIcon style={styles.SearchIcon} />
			</Fab>
		</Box>
	);
};

export default SearchButton;
