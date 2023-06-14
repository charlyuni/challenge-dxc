import VolumeDownIcon from '@mui/icons-material/VolumeDown';
import VolumeMuteIcon from '@mui/icons-material/VolumeMute';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import React from 'react';

export interface VolumeComandProps {
	setMute: (mute: boolean) => void;
	mute: boolean;
	volume: number;
}

const VolumeComand: React.FC<VolumeComandProps> = ({
	setMute,
	mute,
	volume,
}) => {
	return mute ? (
		<VolumeOffIcon
			sx={{ color: 'silver', '&:hover': { color: 'white' } }}
			onClick={() => setMute(!mute)}
		/>
	) : volume <= 20 ? (
		<VolumeMuteIcon
			sx={{ color: 'silver', '&:hover': { color: 'white' } }}
			onClick={() => setMute(!mute)}
		/>
	) : volume <= 75 ? (
		<VolumeDownIcon
			sx={{ color: 'silver', '&:hover': { color: 'white' } }}
			onClick={() => setMute(!mute)}
		/>
	) : (
		<VolumeUpIcon
			sx={{ color: 'silver', '&:hover': { color: 'white' } }}
			onClick={() => setMute(!mute)}
		/>
	);
};

export default VolumeComand;
