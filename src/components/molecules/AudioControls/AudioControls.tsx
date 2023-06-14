import FastForwardIcon from '@mui/icons-material/FastForward';
import FastRewindIcon from '@mui/icons-material/FastRewind';
import PauseIcon from '@mui/icons-material/Pause';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { Stack } from '@mui/material';
import React from 'react';

export interface AudioControlsProps {
	handleReverse: () => void;
	isPlaying: boolean;
	togglePausePlay: () => void;
	handleForward: () => void;
}

const AudioControls: React.FC<AudioControlsProps> = ({
	handleReverse,
	isPlaying,
	togglePausePlay,
	handleForward,
}) => {
	return (
		<Stack
			direction='row'
			spacing={1}
			sx={{
				display: 'flex',
				width: 'auto',
				alignItems: 'center',
			}}
		>
			<FastRewindIcon
				sx={{ color: 'silver', '&:hover': { color: 'white' } }}
				onClick={handleReverse}
				aria-label='Rewind Icon'
			/>
			{!isPlaying ? (
				<PlayArrowIcon
					sx={{ color: 'silver', '&:hover': { color: 'white' } }}
					fontSize={'large'}
					onClick={togglePausePlay}
					aria-label='Play Icon'
				/>
			) : (
				<PauseIcon
					sx={{ color: 'silver', '&:hover': { color: 'white' } }}
					fontSize={'large'}
					onClick={togglePausePlay}
					aria-label='Pause Icon'
				/>
			)}
			<FastForwardIcon
				sx={{ color: 'silver', '&:hover': { color: 'white' } }}
				onClick={handleForward}
				aria-label='Forward Icon'
			/>
		</Stack>
	);
};

export default AudioControls;
