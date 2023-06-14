import { render, fireEvent } from '@testing-library/react';

import SearchBar from './SearchBar';

describe('SearchBar', () => {
	test('renders with placeholder and value', () => {
		const { getByPlaceholderText, getByDisplayValue } = render(
			<SearchBar
				placeholder='Enter a search term'
				inputVisibility={true}
				suggestions={[]}
				handleClickSearchBar={() => {}}
				value='Example Value'
				setValue={() => {}}
				onClickClose={() => {}}
			/>
		);
		const placeholderElement = getByPlaceholderText('Enter a search term');
		const valueElement = getByDisplayValue('Example Value');
		expect(placeholderElement).toBeInTheDocument();
		expect(valueElement).toBeInTheDocument();
	});

	test('calls onClickClose handler when close icon is clicked', () => {
		const onClickCloseMock = jest.fn();
		const { getByTestId } = render(
			<SearchBar
				placeholder=''
				inputVisibility={true}
				suggestions={[]}
				handleClickSearchBar={() => {}}
				value=''
				setValue={() => {}}
				onClickClose={onClickCloseMock}
			/>
		);
		const deleteIconElement = getByTestId('close');
		fireEvent.click(deleteIconElement);
		expect(onClickCloseMock).toHaveBeenCalled();
	});
});
