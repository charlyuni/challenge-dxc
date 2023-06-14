import { render, screen } from '@testing-library/react';

import TitleForm from './TitleForm';

describe('TitleForm', () => {
	test('renders the title correctly', () => {
		const title = 'Sample Title';
		render(<TitleForm title={title} />);
		const titleElement = screen.getByText(title);
		expect(titleElement).toBeInTheDocument();
	});
});
