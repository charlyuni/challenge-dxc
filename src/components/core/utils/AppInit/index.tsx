import { Box } from '@mui/material';

function AppInit() {
	return (
		<Box
			sx={{
				background: 'black',
				height: '100vh',
			}}
		>
			<Box
				sx={{
					position: 'fixed',
					left: 0,
					top: 0,
					bottom: 0,
					right: 0,
					width: '100%',
					height: '100%',
				}}
				display='flex'
				alignItems='center'
				justifyContent='center'
			>
				<img
					style={{ width: '100%', maxWidth: '400px', height: 'auto' }}
					src='/corporative_logo.svg'
					alt='logo'
				/>
			</Box>
		</Box>
	);
}

export default AppInit;
