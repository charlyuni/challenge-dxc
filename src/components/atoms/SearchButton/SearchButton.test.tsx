import { render, fireEvent } from '@testing-library/react';

import SearchButton from './SearchButton';

describe('SearchButton', () => {
	const onClickMock = jest.fn();
	const isVisible = true;

	beforeEach(() => {
		onClickMock.mockClear();
	});

	test('calls onClick handler when button is clicked', () => {
		const { getByRole } = render(
			<SearchButton onClick={onClickMock} isVisible={isVisible} />
		);
		const button = getByRole('button', { name: 'add' });
		fireEvent.click(button);
		expect(onClickMock).toHaveBeenCalledTimes(1);
	});

	test('renders the button with correct icon', () => {
		const { container } = render(
			<SearchButton onClick={onClickMock} isVisible={isVisible} />
		);
		const button = container.querySelector('button');
		const searchIcon = button?.querySelector('svg');
		expect(searchIcon).toBeInTheDocument();
	});
});
