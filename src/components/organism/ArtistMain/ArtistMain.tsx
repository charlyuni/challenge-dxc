import { Card, CardContent, Divider, Typography } from '@mui/material';
import { RootState } from '@redux/store';
import React from 'react';
import { useSelector } from 'react-redux';

import { filtrarPorAutor } from '../../../utils/Functions/filterArtist';
import CardSongSlider from '../../molecules/CardSongSlider/CardSongSlider';
import FilterArtistContain from '../../molecules/FilterArtistContainer/FilterArtistContainer';
import { styles } from './styles';

const ArtistMain: React.FC = () => {
	const { songs, songsArtist } = useSelector(
		(state: RootState) => state.songsAsync
	);

	return (
		<Card
			sx={{ width: '100%', backgroundColor: 'transparent', minHeight: '100vh' }}
		>
			<CardContent sx={styles.cardContainer}>
				<Typography
					variant='generalSubtitle'
					component='span'
					sx={styles.title}
				>
					Elegi a tus artistas favoritos
				</Typography>
				<FilterArtistContain songs={songs} />
			</CardContent>
			<Divider sx={styles.divider} />
			<CardContent sx={styles.cardSlider}>
				<CardSongSlider
					songs={
						songsArtist.length > 0 ? filtrarPorAutor(songs, songsArtist) : songs
					}
				/>
			</CardContent>
		</Card>
	);
};

export default ArtistMain;
