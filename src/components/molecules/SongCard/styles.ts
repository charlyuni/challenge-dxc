// eslint-disable-next-line
export const styles: { [key: string]: any } = {
	container: {
		display: 'flex',
		flexDirection: 'column',
		height: '170px',
		width: '300px',
		minWidth: '300px',
		opacity: '0.95',
		borderRadius: '10px',
		boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
		backgroundColor: '#1cdda6',
	},
	boxLink: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'end',
		alignItems: 'center',
		'&:hover': {
			cursor: 'pointer',
		},
	},
	boxImage: {
		width: 151,
		height: 170,
		display: 'block',
		objectFit: 'fill',
		borderRadius: '10px',
	},
	title: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		gap: '10px',
	},
	playButton: {
		width: '100%',
		height: '70%',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		opacity: { xs: 0.5, sm: 0.5, md: 0 },
		transition: 'all 0.3s ease-in-out',
		'&:hover': {
			opacity: 1,
			paddingTop: '10px',
			cursor: 'pointer',
		},
	},
};
