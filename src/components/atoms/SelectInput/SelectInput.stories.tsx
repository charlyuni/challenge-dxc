import { Meta, Story } from '@storybook/react/types-6-0';
import { Provider as StoreProvider } from 'react-redux';

import { store } from '../../../redux/store';
import SelectInput, { ISelectInputProps } from './SelectInput';
export default {
    component: SelectInput,
    title: 'ChallengeDXC/Atoms/SelectInput',
} as Meta;

const Template: Story<ISelectInputProps> = ({
    data,
    textLabel,
    valueSelect,
    setValueSelect

}: ISelectInputProps) => (
    <StoreProvider store={store}>
        <SelectInput
            data={data}
            textLabel={textLabel}
            valueSelect={valueSelect}
            setValueSelect={setValueSelect}
        />
    </StoreProvider>
);

export const Primary = Template.bind({});
Primary.args = {
    data: ['hola', 'chau'],
    textLabel: 'textLabel',
    valueSelect: '1',
    setValueSelect: () => { console.log('setValueSelect') },
};