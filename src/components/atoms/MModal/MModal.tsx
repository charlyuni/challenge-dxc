import { Backdrop } from '@mui/material';
import React from 'react';

import { styles } from './styles';

export interface MModalProps {
	isOpen: boolean;
	children: React.ReactNode;
}
const MModal: React.FC<MModalProps> = ({ isOpen, children }) => {
	return (
		<Backdrop sx={styles.context} open={isOpen}>
			{children}
		</Backdrop>
	);
};

export default MModal;
