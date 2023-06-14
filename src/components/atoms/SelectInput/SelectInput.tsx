import {
	Box,
	Chip,
	MenuItem,
	OutlinedInput,
	Select,
	SelectChangeEvent,
	Theme,
	useTheme,
} from '@mui/material';
import React from 'react';
import { useDispatch } from 'react-redux';

import { setSongerFilter } from '../../../redux/features/songs/songsSlice';

export interface ISelectInputProps {
	data: string[];
	textLabel: string;
	valueSelect?: string;
	setValueSelect: (value: string) => void;
}

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
	PaperProps: {
		style: {
			maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
			width: 250,
		},
	},
};

function getStyles(name: string, personName: readonly string[], theme: Theme) {
	return {
		fontWeight:
			personName.indexOf(name) === -1
				? theme.typography.fontWeightRegular
				: theme.typography.fontWeightMedium,
	};
}

const SelectInput: React.FC<ISelectInputProps> = ({ data, setValueSelect }) => {
	const theme = useTheme();
	const dispatch = useDispatch();

	const [artistName, setPersonName] = React.useState<string[]>([]);

	const handleChange = (event: SelectChangeEvent<typeof artistName>) => {
		setValueSelect(event.target.value as string);
		dispatch(setSongerFilter([...(event.target.value as string)]));
		const {
			target: { value },
		} = event;
		setPersonName(typeof value === 'string' ? value.split(',') : value);
	};

	return (
		<Box sx={{ minWidth: 120 }}>
			<Select
				labelId='seleccionarArtist'
				id='seleccionarArtist'
				sx={{
					minWidth: '300px',
					'& .MuiOutlinedInput-notchedOutline': {
						borderColor: theme.palette.background.paper,
					},
				}}
				multiple
				value={artistName}
				onChange={handleChange}
				input={<OutlinedInput id='seleccionarArtist' label='Artist' />}
				renderValue={(selected) => (
					<Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
						{selected.map((value) => (
							<Chip
								key={value}
								label={value}
								sx={{ color: theme.palette.background.paper }}
							/>
						))}
					</Box>
				)}
				MenuProps={MenuProps}
			>
				{data.map((artist) => (
					<MenuItem
						key={artist}
						value={artist}
						style={getStyles(artist, artistName, theme)}
					>
						{artist}
					</MenuItem>
				))}
			</Select>
		</Box>
	);
};

export default SelectInput;
