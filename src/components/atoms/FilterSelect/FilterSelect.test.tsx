import { render, fireEvent } from '@testing-library/react';

import FilterSelect from './FilterSelect';

describe('FilterSelect', () => {
	test('renders filter chip with label', () => {
		const valueLabel = 'Filter Value';
		const { getByText } = render(
			<FilterSelect valueLabel={valueLabel} onClick={() => {}} />
		);
		const chipElement = getByText(valueLabel);
		expect(chipElement).toBeInTheDocument();
	});

	test('calls onClick handler when delete icon is clicked', () => {
		const onClickMock = jest.fn();
		const { getByTestId } = render(
			<FilterSelect valueLabel='Filter Value' onClick={onClickMock} />
		);
		const deleteIconElement = getByTestId('delete-icon');
		fireEvent.click(deleteIconElement);
		expect(onClickMock).toHaveBeenCalled();
	});
});
