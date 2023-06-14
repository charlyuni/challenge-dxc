import { Box, Container, Grid, Stack, useTheme } from '@mui/material';
import { AppDispatch, RootState } from '@redux/store';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import SearchBar from '../../components/atoms/SearchBar/SearchBar';
import SearchButton from '../../components/atoms/SearchButton/SearchButton';
import Seo from '../../components/core/seo';
import CardDashboardSlider from '../../components/molecules/CardSongSlider/CardSongSlider';
import NavBar from '../../components/molecules/NavBar/NavBar';
import CardMain from '../../components/organism/CardMain/CardMain';
import FooterControl from '../../components/organism/FooterControl/FooterControl';
import Layout from '../../components/templates/Layout';
import {
	setModealSearchOpen,
	setSearchValue,
} from '../../redux/features/modalSearchOpen';
import { fetchSongs } from '../../redux/features/songs/fetchSongs';
import { setSongFilter } from '../../redux/features/songs/songsSlice';
import { filterSongs } from '../../utils/Functions/filterSongs';

const HomePage = () => {
	const dispatch = useDispatch<AppDispatch>();
	const theme = useTheme();
	const { songs, idSelect } = useSelector(
		(state: RootState) => state.songsAsync
	);
	const { modealSearchIsOpen } = useSelector(
		(state: RootState) => state.modalSearhOpen
	);
	const [value, setValue] = useState('');

	useEffect(() => {
		dispatch(fetchSongs(''));
	}, [dispatch]);

	useEffect(() => {
		console.log(idSelect);
	}, [idSelect]);

	const handleClickButtonSearch = () => {
		dispatch(setModealSearchOpen());
	};

	const handleClickSearchBar = () => {
		dispatch(setSongFilter(filterSongs(songs, value)));
		dispatch(setModealSearchOpen());
		dispatch(setSearchValue(value));
	};

	return (
		<>
		<Seo title={'Lista de Músicas'} description={'Lista de Músicas'} />
		<Layout
			Header={<NavBar />}
			Footer={idSelect > 1 ? <FooterControl songs={songs} /> : null}
		>
			<Grid container>
				<Box
					sx={{
						display: 'flex',
						position: 'fixed',
						width: '91vw',
						right: '20px',
						zIndex: '10000',
						bottom: { xs: theme.spacing(20), md: theme.spacing(25) },
					}}
				>
					<SearchBar
						placeholder={'Buscar'}
						inputVisibility={modealSearchIsOpen}
						suggestions={[]}
						handleClickSearchBar={handleClickSearchBar}
						value={value}
						setValue={setValue}
						onClickClose={handleClickButtonSearch}
					/>
					<SearchButton
						onClick={handleClickButtonSearch}
						isVisible={!modealSearchIsOpen}
					/>
				</Box>

				<Grid item xs={10} sx={{ margin: 'auto', marginTop: '80px' }}>
					<Stack
						spacing={2}
						direction='row'
						justifyContent='center'
						alignItems='center'
						sx={{
							backgroundColor: 'transparent',
							width: '100%',
							zIndex: 1,
							borderRadius: '10px',
							height: 'auto',
						}}
					>
						<CardMain />
					</Stack>
				</Grid>
				<Container maxWidth='md' disableGutters sx={{ marginTop: '20px' }}>
					<CardDashboardSlider songs={songs} />
				</Container>
			</Grid>
		</Layout>
		</>
	);
};

export default HomePage;
