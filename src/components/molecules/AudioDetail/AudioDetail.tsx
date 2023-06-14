import { Box, IconButton, Stack, Typography } from '@mui/material';
import React from 'react';

import MuiAvatar from '../../atoms/Avatar/Avatar';

interface Data {
	id: number;
	created_at: string;
	title: string;
	src: string;
	image_path: string;
	duration: number;
	rating: number;
	group: any;
	album: string;
	song_number: number;
	author: string;
	news: boolean;
}

export interface AudioDetailProps {
	renderArray: [Data];
}

const AudioDetail: React.FC<AudioDetailProps> = ({ renderArray }) => {
	return (
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
			<Box
				sx={{
					alignItems: 'center',
					flexDirection: 'column',
					display: { xs: 'none', md: 'flex' }
				}}
			>
				<Typography sx={{ color: 'silver' }}>
					{renderArray[0].author}
				</Typography>
				<Typography sx={{ color: 'silver' }}>{renderArray[0].title}</Typography>
			</Box>
			<Stack
				direction='column'
				spacing={1}
				sx={{
					display: 'flex',
					justifyContent: 'flex-start',
					width: '25%',
					alignItems: 'center',
					paddingLeft: '1rem',
				}}
			>
				<IconButton>
					<MuiAvatar
						src={renderArray[0].image_path}
						title={renderArray[0].title}
					/>
				</IconButton>
			</Stack>
		</Stack>
	);
};

export default AudioDetail;
