import { combineReducers } from '@reduxjs/toolkit';

import modalSearchOpenSliceReducer from '../features/modalSearchOpen';
import songsSliceReducer from '../features/songs/songsSlice';

const rootReducer = combineReducers({
	songsAsync: songsSliceReducer,
	modalSearhOpen: modalSearchOpenSliceReducer,
});

export default rootReducer;
