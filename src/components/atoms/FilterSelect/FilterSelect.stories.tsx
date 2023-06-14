import { Meta, Story } from '@storybook/react/types-6-0';

import FilterSelect, { FilterSelectProps } from './FilterSelect';

export default {
	component: FilterSelect,
	title: 'ChallengeDXC/Atoms/FilterSelect',
} as Meta;

const Template: Story<FilterSelectProps> = ({
	valueLabel,
	color,
	onClick,
}: FilterSelectProps) => (
	<FilterSelect valueLabel={valueLabel} color={color} onClick={onClick} />
);

export const Primary = Template.bind({});
Primary.args = {
	valueLabel: 'Value Label',
	color: 'warning',
	onClick: () => {console.log('onClick')},
};
