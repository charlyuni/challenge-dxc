import { Stack } from '@mui/material';
import { Song } from '@types';
import React, { useMemo } from 'react';

import SelectInput from '../../atoms/SelectInput/SelectInput';

export interface FilterArtistContainProps {
	songs: Song[];
}

export const filterSongs = (songs: Song[] = []) => {
	const uniqueSonger = new Set();
	for (let i = 0; i < songs.length; i++) {
		const songer = songs[i].author;
		if (!uniqueSonger.has(songer)) {
			uniqueSonger.add(songer);
		}
	}
	return Array.from(uniqueSonger);
};

const FilterArtistContainer: React.FC<FilterArtistContainProps> = ({
	songs,
}) => {
	const [valueSelect, setValueSelect] = React.useState<string>('');
	const artistList: any = useMemo(() => filterSongs(songs), [songs]);

	return (
		<Stack spacing={5}>
			<SelectInput
				data={artistList}
				textLabel='Artista'
				valueSelect={valueSelect}
				setValueSelect={setValueSelect}
			/>
		</Stack>
	);
};

export default FilterArtistContainer;
