// eslint-disable-next-line
export const styles: { [key: string]: any } = {
	cardContainer: {
		display: 'flex',
		flexDirection: { xs: 'column', sm: 'column', md: 'row' },
		alignItems: 'center',
		justifyContent: 'center',
		marginTop: '90px',
		gap: '20px',
	},
	cardSlider: {
		padding: {
			xs: '0 20px',
			sm: '0 20px',
			md: '40px 40px',
		},
	},
	title: {
		fontSize: '24px',
		fontWeight: 'bold',
		color: '#FFFFFF',
		marginBottom: '20px',
	},
	divider: {
		backgroundColor: '#FFFFFF',
		height: '1px',
		width: '100%',
		marginBottom: '20px',
	},
};
