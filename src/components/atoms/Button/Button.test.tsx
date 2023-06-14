import { render, screen, fireEvent } from '@testing-library/react';

import Button from './Button';

import '@testing-library/jest-dom';

describe('Button', () => {
	it('renders a disabled button', () => {
		render(<Button text='Disabled' disabled />);
		const disabledButton = screen.getByRole('button', { name: /Disabled/i });
		expect(disabledButton).toBeDisabled();
	});
	test('renders button with text', () => {
		const text = 'Click me';
		const { getByText } = render(<Button text={text} />);
		const buttonElement = getByText(text);
		expect(buttonElement).toBeInTheDocument();
	});

	test('calls onClick handler when clicked', () => {
		const onClickMock = jest.fn();
		const { getByText } = render(
			<Button text='Click me' onClick={onClickMock} />
		);
		const buttonElement = getByText('Click me');
		fireEvent.click(buttonElement);
		expect(onClickMock).toHaveBeenCalledTimes(1);
	});
});
