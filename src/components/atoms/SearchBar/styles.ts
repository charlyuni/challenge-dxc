/* eslint-disable  @typescript-eslint/no-explicit-any */
export const styles: { [key: string]: any } = {
	customInput: {
		fontStyle: 'normal',
		fontWeight: 400,
		fontSize: '19px',
		lineHeight: '26px',
		borderRadius: '50px',
		border: '2px solid',
		color: '#000000',
		backgroundColor: '#FFFFFF',
		width: 'calc(100vw - 60px)',
		maxWidth: 'calc(90vw - 40px)',
		height: '44px',
		'& .MuiOutlinedInput-notchedOutline': {
			border: '0px',
		},
		'&.Mui-focused .MuiOutlinedInput-notchedOutline': {
			border: '0px',
		},
		'.MuiInputBase-root': {
			color: '#000000',
		},
		'.MuiOutlinedInput-input': {
			height: '38px',
			paddingTop: '0px',
		},
	},
	container: {
		position: 'fixed',
		maxWidth: '90vw',
		width: '90vw',
		boxShadow: '0px 2px 4px rgba(37, 32, 32, 0.25)',
		borderRadius: '20px',
	},
	iconButton: {
		position: 'absolute',
		top: '8px',
		right: '12px',
		zIndex: 2,
	},
	iconClose: {
		boxShadow: `inset -1px 3px 5px rgba(50, 45, 45, 0.15)`,
		borderRadius: '50%',
	},
	containerResult: {
		position: 'absolute',
		zIndex: 2,
		top: '38px',
		left: '8px',
		paddingLeft: '20px',
	},
	result: {
		position: 'relative',
		cursor: 'pointer',
		margin: '0px',
		paddingBottom: '10px',
	},
	boxContrast: {
		backgroundColor: 'rgba(148, 142, 141, 0.3)',
		backdropFilter: 'blur(10px)',
		borderRadius: '20px',
		boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
		position: 'absolute',
		width: '100%',
		height: '100%',
	},
	boxCustomer: {
		backdropFilter: 'blur(10px) contrast(20%)',
		opacity: 0.65,
		borderRadius: '20px',
		position: 'absolute',
		width: '100%',
		height: '100%',
	},
	containerInput: {
		position: 'absolute',
		bottom: '-5px',
		left: '5px',
		padding: '15px',
		zIndex: 2,
	},
	sendIcon: {
		transform: 'rotate(40deg)',
	},
};
