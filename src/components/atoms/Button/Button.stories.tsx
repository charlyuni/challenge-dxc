import { Meta, Story } from '@storybook/react/types-6-0';
import { theme } from '@theme';
import { ChevronRight } from 'react-feather';

import Button, { IButtonProps } from './Button';

export default {
	component: Button,
	parameters: {
		docs: {
			description: {
				component: 'Button',
			},
		},
	},
	title: 'ChallengeDXC/Atoms/Button',
} as Meta;

const Template: Story<IButtonProps> = (props: IButtonProps) => (
	<Button {...props} />
);

export const MainActive = Template.bind({ theme });
MainActive.args = {
	variant: 'contained',
	text: 'main active w/base',
	endIcon: <ChevronRight size={18} />,
	disabled: false,
};

export const MainInactive = Template.bind({ theme });
MainInactive.args = {
	text: 'main inactive',
	variant: 'contained',
	endIcon: <ChevronRight size={18} />,
	disabled: true,
};

export const Link = Template.bind({ theme });
Link.args = {
	variant: 'text',
	text: 'Boton link',
};
