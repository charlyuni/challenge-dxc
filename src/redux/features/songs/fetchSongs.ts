import { createAsyncThunk } from '@reduxjs/toolkit';
import { createClient } from '@supabase/supabase-js';

import { songsError } from './songsTypes';

const supabase = createClient(
	'https://uptfspwkxomvqkizwmtc.supabase.co',
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVwdGZzcHdreG9tdnFraXp3bXRjIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODY1OTkyNDgsImV4cCI6MjAwMjE3NTI0OH0.f5tk6z0RkfKebbkO6BietfYqaWoHw7ySmQ7wtj_EJaA'
);

export const fetchSongs = createAsyncThunk<
	any,
	any,
	{ rejectValue: songsError }
>('songs/fetch', async (q, thunkApi) => {
	try {
		const response = await supabase.from('songs').select('*');
		return response.data;
	} catch (error) {
		return thunkApi.rejectWithValue({
			message: 'Error fetching songs',
			rejectWithValue: 'rejectWithValue',
		});
	}
});
