import { Meta, Story } from '@storybook/react/types-6-0';

import VolumeComand, { VolumeComandProps } from './VolumeComand';

export default {
	component: VolumeComand,
	title: 'ChallengeDXC/Atoms/VolumeComand',
} as Meta;

const Template: Story<VolumeComandProps> = ({
    setMute,
	mute,
	volume,
}: VolumeComandProps) => (
	<VolumeComand 
        setMute={setMute}
        mute={mute}
        volume={volume}
        />
);

export const Primary = Template.bind({});
Primary.args = {
    setMute: () => {console.log('setMute')},
    mute: false,
    volume: 50,
};