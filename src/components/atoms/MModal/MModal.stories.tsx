import { Meta, Story } from '@storybook/react/types-6-0';

import MModal, { MModalProps } from './MModal';

export default {
    component: MModal,
    title: 'ChallengeDXC/Atoms/MModal',
} as Meta;

const Template: Story<MModalProps> = ({
    isOpen,
    children,
}: MModalProps) => (
    <MModal isOpen={isOpen} >
        {children}
    </MModal>
);

export const Primary = Template.bind({});
Primary.args = {
    isOpen: true,
    children: 'Children',
};
