import { render, screen, fireEvent } from '@testing-library/react';
import { Provider as StoreProvider } from 'react-redux';

import { setIdSelect } from '../../../redux/features/songs/songsSlice';
import { store } from '../../../redux/store';
import SongCard from './SongCard';

describe('SongCard', () => {
	test('dispatches the correct action when play button is clicked', () => {
		const title = 'Song Title';
		const image = 'song-image.jpg';
		const id = 1;
		const author = 'Song Author';
		const newSong = false;
		const dispatchMock = jest.fn();

		render(
			<SongCard
				title={title}
				image={image}
				id={id}
				author={author}
				newSong={newSong}
			/>,
			{
				// Proporcionar un mock para useDispatch que registre las llamadas
				wrapper: ({ children }) => (
					<StoreProvider store={{ ...store, dispatch: dispatchMock }}>
						{children}
					</StoreProvider>
				),
			}
		);

		// Hacer clic en el botón de reproducción
		fireEvent.click(screen.getByLabelText('play-button'));

		// Verificar que la acción correcta se haya despachado con el ID de la canción
		expect(dispatchMock).toHaveBeenCalledWith(setIdSelect(id));
	});
});
