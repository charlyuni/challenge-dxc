import { Grid, useTheme } from '@mui/material';
import { RootState } from '@redux/store';
import { useSelector } from 'react-redux';

import Seo from '../../components/core/seo';
import NavBar from '../../components/molecules/NavBar/NavBar';
import ArtistMain from '../../components/organism/ArtistMain/ArtistMain';
import FooterControl from '../../components/organism/FooterControl/FooterControl';
import Layout from '../../components/templates/Layout';

const RandomSongs = () => {
	const theme = useTheme();
	const { songs, idSelect } = useSelector((state: RootState) => state.songsAsync);

	return (
		<>
			<Seo title={'Lista de Músicas'} description={'Lista de Músicas'} />
			<Layout Header={<NavBar />} Footer={idSelect > 1 ? <FooterControl songs={songs} /> : null}>
				<Grid
					container
					direction='row'
					alignItems='center'
					rowSpacing={'15px'}
					columnSpacing={{ xs: '15px' }}
					sx={{
						paddingX: theme.spacing(2),
					}}
				>
					<ArtistMain />
				</Grid>
			</Layout >
		</>
	);
};

export default RandomSongs;
