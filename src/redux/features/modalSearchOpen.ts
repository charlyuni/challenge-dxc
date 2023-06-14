import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface modealSearchOpenState {
	modealSearchIsOpen: boolean;
	search?: string;
}

const initialState: modealSearchOpenState = {
	modealSearchIsOpen: false,
	search: '',
};

export const modealSearchOpenSlice = createSlice({
	name: 'OpenModal',
	initialState,
	reducers: {
		setModealSearchOpen: (state) => {
			state.modealSearchIsOpen = !state.modealSearchIsOpen;
		},
		setSearchValue: (state, action: PayloadAction<string | undefined>) => {
			state.search = action.payload;
		},
	},
});

export const { setModealSearchOpen, setSearchValue } =
	modealSearchOpenSlice.actions;

export default modealSearchOpenSlice.reducer;
