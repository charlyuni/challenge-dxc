import { Meta, Story } from '@storybook/react/types-6-0';

import SearchButton, { ISearchButton } from './SearchButton';

export default {
	component: SearchButton,
	title: 'ChallengeDXC/Atoms/SearchButton',
} as Meta;

const Template: Story<ISearchButton> = ({
	onClick,
    isVisible,
	
}: ISearchButton) => (
	<SearchButton 
        onClick={onClick}
        isVisible={isVisible}
        />
);

export const Primary = Template.bind({});
Primary.args = {
    onClick: () => {console.log('onClick')},
    isVisible: true,
};