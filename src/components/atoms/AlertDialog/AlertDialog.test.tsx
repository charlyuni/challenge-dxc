import { render, screen } from '@testing-library/react';

import AlertDialog from './AlertDialog';

export type TypesDialog = 'success' | 'info' | 'warning' | 'error';

describe('AlertDialog', () => {
	test('renders correctly with success type', () => {
		const props = {
			type: 'error' as TypesDialog,
			title: 'Success',
			subtitle: 'Operation completed successfully',
		};

		render(<AlertDialog {...props} />);

		expect(
			screen.getByText('Success - Operation completed successfully')
		).toBeInTheDocument();
	});

	test('closes the dialog after 2 seconds', () => {
		const props = {
			type: 'error' as TypesDialog,
			title: 'Warning',
			subtitle: 'Something went wrong',
		};

		render(<AlertDialog {...props} />);

		expect(
			screen.getByText('Warning - Something went wrong')
		).toBeInTheDocument();

		setTimeout(() => {
			expect(
				screen.queryByText('Warning - Something went wrong')
			).not.toBeInTheDocument();
		}, 2000);
	});
});
