import { Meta, Story } from '@storybook/react/types-6-0';

import Avatar, { AvatarProps } from './Avatar';

export default {
	component: Avatar,
	title: 'ChallengeDXC/Atoms/Avatar',
} as Meta;

const Template: Story<AvatarProps> = ({
	src,
	title,
}: AvatarProps) => (
	<Avatar src={src} title={title} />
);

export const Primary = Template.bind({});
Primary.args = {
	src: 'https://www.w3schools.com/howto/img_avatar.png',
	title: 'Avatar',
};
