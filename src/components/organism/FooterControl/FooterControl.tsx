import {
	styled,
	Typography,
	Slider,
	Paper as unStyledPaper,
	Stack,
	Box,
	Rating,
	useTheme,
} from '@mui/material';
import { RootState } from '@redux/store';
import { Song } from '@types';
import React, { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';

import { calculateTime } from '../../../utils/Functions/calculateTime';
import VolumeComand from '../../atoms/VolumeComand/VolumeComand';
import AudioControls from '../../molecules/AudioControls/AudioControls';
import AudioDetail from '../../molecules/AudioDetail/AudioDetail';

const Paper = styled(unStyledPaper)(({ theme }) => ({
	backgroundColor: '#4c4c4c',
	marginLeft: theme.spacing(4),
	marginRight: theme.spacing(4),
	padding: theme.spacing(2),
}));

const PSlider = styled(Slider)(() => ({
	color: 'silver',
	height: 2,
	'& .MuiSlider-thumb': {
		width: '13px',
		height: '13px',
		display: 'block',
	},
	'&:hover': {
		cursor: 'auto',
	},
}));

export interface FooterControlProps {
	songs: Song[];
}

const FooterControl: React.FC<FooterControlProps> = () => {
	const theme = useTheme();
	const { songSelected } = useSelector((state: RootState) => state.songsAsync);
	const player = useRef<HTMLMediaElement | HTMLAudioElement>(null);
	const progressBar = useRef<HTMLDivElement>(null);

	const [isPlaying, setIsPlaying] = useState(false);
	const [elapsed, setElapsed] = useState<number>(0);
	const [duration, setDuration] = useState<number>(0);
	const [volume, setVolume] = useState<number>(50);
	const [mute, setMute] = useState(false);
	const renderArray: any = songSelected;

	useEffect(() => {
		if (isPlaying) {
			setInterval(() => {
				const duration = player.current
					? Math.floor(player?.current?.duration)
					: 0;
				const elapsedTime = player.current
					? Math.floor(player?.current?.currentTime)
					: 0;
				setDuration(duration);
				setElapsed(elapsedTime);
				if (elapsedTime === duration) {
					setIsPlaying(false);
					player.current?.pause();
				}
			}, 100);
		}
		if (player.current) {
			player.current.volume = volume / 100;
		}
	}, [player?.current?.readyState, isPlaying, volume]);

	useEffect(() => {
		if (isPlaying) {
			setElapsed(0);
			player.current?.play();
		}
	}, [songSelected]);

	const togglePausePlay = () => {
		const prevVal = isPlaying;
		setIsPlaying(!prevVal);
		if (!prevVal) {
			player.current?.play();
		} else {
			player.current?.pause();
		}
	};
	const handleForward = () => {
		if (player.current) player.current.currentTime += 10;
	};

	const handleReverse = () => {
		if (player.current) player.current.currentTime -= 10;
	};

	return (
		<Box
			component='div'
			sx={{
				backgroundColor: '#4c4c4c',
				height: '100vh',
				width: '100vw',
				paddingTop: theme.spacing(1),
			}}
		>
			{renderArray.length > 0 && (
				<Paper>
					<Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
						<audio src={renderArray[0].src} ref={player} muted={mute} />

						<AudioDetail renderArray={renderArray} />
						<AudioControls
							handleReverse={handleReverse}
							isPlaying={isPlaying}
							togglePausePlay={togglePausePlay}
							handleForward={handleForward}
						/>
						<Stack
							direction='row'
							spacing={1}
							sx={{
								display: 'flex',
								justifyContent: 'flex-start',
								width: '25%',
								alignItems: 'center',
							}}
						>
							<VolumeComand setMute={setMute} mute={mute} volume={volume} />
							<Slider
								min={0}
								value={volume}
								max={100}
								onChange={(e: any) => setVolume(e.target.value)}
							/>
						</Stack>
					</Box>

					<Stack
						spacing={2}
						direction='row'
						sx={{
							display: 'flex',
							justifyContent: 'flex-end',
							alignItems: 'center',
							paddingTop: '1rem',
						}}
					>
						<Rating name='read-only' value={renderArray[0].rating} readOnly sx={{display: {xs: 'none', sm: 'flex'}}} />
						<Typography sx={{ color: 'silver' }}>
							{calculateTime(elapsed)}
						</Typography>
						<PSlider value={elapsed} max={duration} ref={progressBar} />
						<Typography sx={{ color: 'silver' }}>
							{calculateTime(duration - elapsed)}
						</Typography>
					</Stack>
				</Paper>
			)}
		</Box>
	);
};

export default FooterControl;
