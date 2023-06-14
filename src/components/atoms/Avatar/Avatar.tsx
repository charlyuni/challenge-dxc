import { Avatar } from '@mui/material';
import React from 'react';

export interface AvatarProps {
	src: string;
	title: string;
}

const MuiAvatar: React.FC<AvatarProps> = ({ src, title }) => {
	return <Avatar alt={title} src={src} />;
};

export default MuiAvatar;
