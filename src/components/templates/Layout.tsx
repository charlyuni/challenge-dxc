import { Box, Container } from '@mui/material';
import CSS from 'csstype';
import { FC, ReactNode } from 'react';

interface ILayoutWithHeaderAndFooter {
	Header: ReactNode;
	Footer: ReactNode;
	children: ReactNode;
	sx?: CSS.Properties;
	onClick?: () => void;
}

const Layout: FC<ILayoutWithHeaderAndFooter> = ({
	Header,
	Footer,
	children,
	sx,
	onClick,
}) => {
	return (
		<Box
			component={'body'}
			sx={{
				paddingBottom: '20%',
				background:
					'linear-gradient(180deg, rgba(4,120,87,1) 0%, rgba(7,105,77,1) 9%, rgba(18,38,32,1) 25%, rgba(20,25,23,1) 100%)',
				minHeight: '100vh',
			}}
		>
			<Box
				sx={{
					height: 'auto',
					width: '100%',
				}}
				onClick={onClick}
			>
				<Container maxWidth={false} disableGutters component={'nav'}>
					{Header}
				</Container>
				<Container
					disableGutters
					maxWidth={false}
					component={'main'}
					sx={{ ...sx }}
				>
					{children}
				</Container>
				<Box
					component={'footer'}
					sx={{
						position: 'fixed',
						bottom: 0,
						width: '100%',
						height: 'auto',
						zIndex: 9999,
						maxHeight: '20%',
					}}
				>
					{Footer}
				</Box>
			</Box>
		</Box>
	);
};

export default Layout;
