import { Meta, Story } from '@storybook/react/types-6-0';

import SearchBar, { ISearchBar } from './SearchBar';

export default {
	component: SearchBar,
	title: 'ChallengeDXC/Atoms/SearchBar',
} as Meta;

const Template: Story<ISearchBar> = ({
	placeholder,
	inputVisibility,
	suggestions,
	handleClickSearchBar,
	value,
	setValue,
	onClickClose,
	
}: ISearchBar) => (
	<SearchBar 
		placeholder={placeholder}
		inputVisibility={inputVisibility}
		suggestions={suggestions}
		handleClickSearchBar={handleClickSearchBar}
		value={value}
		setValue={setValue}
		onClickClose={onClickClose}
		/>
);

export const Primary = Template.bind({});
Primary.args = {
	placeholder: 'Search',
	inputVisibility: true,
	suggestions: ['a', 'b', 'c'],
	handleClickSearchBar: () => {console.log('handleClickSearchBar')},
	value: 'a',
	setValue: () => {console.log('handleClickSearchBar')},
	onClickClose: () => {console.log('handleClickSearchBar')},
};