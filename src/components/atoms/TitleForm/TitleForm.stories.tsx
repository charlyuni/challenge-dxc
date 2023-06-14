import { Meta, Story } from '@storybook/react/types-6-0';

import TitleForm, { ITitleFormProps } from './TitleForm';

export default {
	component: TitleForm,
	title: 'ChallengeDXC/Atoms/TitleForm',
} as Meta;

const Template: Story<ITitleFormProps> = ({
    title,
	
}: ITitleFormProps) => (
	<TitleForm 
        title={title}
        />
);

export const Primary = Template.bind({});
Primary.args = {
    title: 'Title',
};