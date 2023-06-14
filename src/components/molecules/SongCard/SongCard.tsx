import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import {
	Box,
	Chip,
	Grid,
	Paper,
	Stack,
	Typography,
	useTheme,
} from '@mui/material';
import { useDispatch } from 'react-redux';

import { setIdSelect } from '../../../redux/features/songs/songsSlice';
import { styles } from './styles';

export interface ISongCardProps {
	title: string;
	image: string;
	id: number;
	author: string;
	newSong: boolean;
}

const SongCard = ({ title, image, id, author, newSong }: ISongCardProps) => {
	const theme = useTheme();
	const dispatch = useDispatch();

	const handlePlay = (id: number) => {
		dispatch(setIdSelect(id));
	};

	return (
		<Paper elevation={24} sx={styles.container}>
			<Grid container>
				<Grid item xs={6} height='100%'>
					<Box component='img' sx={styles.boxImage} src={image} alt={title} />
				</Grid>
				<Grid item xs={6} padding={2}>
					<Box sx={styles.title}>
						<Typography
							variant='generalTextMedium'
							color='inherit'
							fontSize={17}
						>
							{title}
						</Typography>

						<Typography
							variant='generalTextSmall'
							color={theme.palette.primary.main}
						>
							{author}
						</Typography>

						{newSong ? <Chip label='News' /> : null}
					</Box>
					<Stack
						direction='row'
						justifyContent='space-between'
						alignItems='flex-start'
						spacing={1}
						sx={{ ...styles.playButton, color: theme.palette.text.primary }}
					>
						<PlayCircleFilledIcon
							fontSize={'large'}
							sx={{ color: '#074533' }}
							onClick={() => handlePlay(id)}
							style={{ position: 'absolute', bottom: 10 }}
							aria-label='play-button'
						/>
					</Stack>
				</Grid>
			</Grid>
		</Paper>
	);
};

export default SongCard;
