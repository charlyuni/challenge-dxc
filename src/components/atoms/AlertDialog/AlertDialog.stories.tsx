import { Meta, Story } from '@storybook/react/types-6-0';

import AlertDialog, { IDialogAlertProps } from './AlertDialog';

export default {
	component: AlertDialog,
	title: 'ChallengeDXC/Atoms/AlertDialog',
} as Meta;

const Template: Story<IDialogAlertProps> = ({
	title,
	subtitle,
	type,
}: IDialogAlertProps) => (
	<AlertDialog  title={title} subtitle={subtitle} type={type} />
);

export const Primary = Template.bind({});
Primary.args = {
	title: 'Title',
	subtitle: 'Subtitle',
	type: 'success',
};
