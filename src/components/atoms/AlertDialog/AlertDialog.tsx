import { Alert, Snackbar, Stack } from '@mui/material';
import React, { useState } from 'react';

export interface IDialogAlertProps {
	type: 'success' | 'info' | 'warning' | 'error';
	title: string;
	subtitle?: string;
}

const AlertDialog = ({ type, title, subtitle }: IDialogAlertProps) => {
	const [open, setOpen] = useState(true);

	const handleClose = (
		event?: React.SyntheticEvent | Event,
		reason?: string
	) => {
		if (reason === 'clickaway') {
			return;
		}
		setOpen(false);
	};

	return (
		<Stack spacing={2} sx={{ width: '100%' }}>
			<Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
				<Alert onClose={handleClose} severity={type} sx={{ width: '100%' }}>
					{title} {` - ${subtitle}`}
				</Alert>
			</Snackbar>
		</Stack>
	);
};

export default AlertDialog;
