import { render } from '@testing-library/react';

import MModal from './MModal';

describe('MModal', () => {
	test('renders children when isOpen is true', () => {
		const { getByText } = render(
			<MModal isOpen={true}>
				<div>Modal Content</div>
			</MModal>
		);
		const modalContentElement = getByText('Modal Content');
		expect(modalContentElement).toBeInTheDocument();
	});

	test('does not render children when isOpen is false', () => {
		const { queryByRole } = render(
			<MModal isOpen={false}>
				<div>Modal Content</div>
			</MModal>
		);
		const modalContentElement = queryByRole('dialog');
		expect(modalContentElement).toBeNull();
	});
});
