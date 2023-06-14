import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Song } from '@types';

import { RootState } from '../../store';
import { fetchSongs } from './fetchSongs';

export interface SongsState {
	error: string | null;
	songs: any;
	songsFilter: any;
	songsArtist: string[];
	idSelect: number;
	status: 'loading' | 'idle';
	search: string;
	songSelected: Song;
}

const initialState: SongsState = {
	idSelect: 0,
	songSelected: {
		id: 1,
		created_at: '',
		title: '',
		src: '',
		image_path: '',
		duration: 0,
		rating: 0,
		group: '',
		album: '',
		song_number: 0,
		author: '',
	},
	songs: [],
	songsArtist: [],
	songsFilter: [],
	error: null,
	status: 'idle',
	search: '',
};

export const songsSlice = createSlice({
	name: 'songs',
	initialState,
	reducers: {
		setIdSong: (state, action: PayloadAction<string>) => {
			state.search = action.payload;
		},
		setFilterSongs: (state, action: PayloadAction<string>) => {
			state.songsFilter = state.songs.filter((song: any) =>
				song.title.toLowerCase().includes(action.payload.toLowerCase())
			);
		},
		setIdSelect: (state, action: PayloadAction<number>) => {
			state.idSelect = action.payload;
			state.songSelected = state.songs.filter(
				(song: Song) => song.id === state.idSelect
			);
		},
		setSongFilter: (state, action: PayloadAction<Song[]>) => {
			state.songsFilter = action.payload;
		},
		setSongerFilter: (state, action: PayloadAction<string[]>) => {
			state.songsArtist = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder.addCase(fetchSongs.pending, (state) => {
			state.status = 'loading';
			state.error = null;
		});
		builder.addCase(fetchSongs.fulfilled, (state, { payload }) => {
			state.songs = payload;
			state.status = 'idle';
		});
		builder.addCase(fetchSongs.rejected, (state, { payload }) => {
			if (payload) state.error = payload.message;
			state.status = 'idle';
		});
	},
});

export const productsSelector = (state: RootState) => state.songsAsync.songs;

export const {
	setIdSong,
	setFilterSongs,
	setIdSelect,
	setSongFilter,
	setSongerFilter,
} = songsSlice.actions;

export default songsSlice.reducer;
