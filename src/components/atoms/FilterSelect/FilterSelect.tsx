import DeleteIcon from '@mui/icons-material/Delete';
import { Chip, Stack } from '@mui/material';
import React from 'react';

export interface FilterSelectProps {
	valueLabel: string;
	color?: string;
	onClick: () => void;
}

const FilterSelect: React.FC<FilterSelectProps> = ({ valueLabel, onClick }) => {
	return (
		<Stack direction='row' spacing={1}>
			<Chip
				label={valueLabel}
				onDelete={onClick}
				deleteIcon={<DeleteIcon data-testid='delete-icon' />}
				color='warning'
			/>
		</Stack>
	);
};

export default FilterSelect;
