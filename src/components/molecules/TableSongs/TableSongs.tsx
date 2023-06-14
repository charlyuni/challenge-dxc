import {
	Paper,
	Rating,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableFooter,
	TablePagination,
	TableRow,
} from '@mui/material';
import { RootState } from '@redux/store';
import React, { useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import MuiAvatar from '../../../components/atoms/Avatar/Avatar';
import { setIdSelect } from '../../../redux/features/songs/songsSlice';
import { formatDate } from '../../../utils/Functions/formatData';
import { getComparator, sortArray } from '../../../utils/Functions/sortArray';
import MTableHead from './MTableHead';
import { TablePaginationAction } from './TablePagination';

export default function TableSongs() {
	const dispatch = useDispatch();
	const [page, setPage] = useState(0);
	const [songsPerPage, setSongsPerPage] = useState(5);
	const { songs, songsFilter } = useSelector(
		(state: RootState) => state.songsAsync
	);
	const { modealSearchIsOpen, search } = useSelector(
		(state: RootState) => state.modalSearhOpen
	);

	const visibleSongs = useMemo(
		() =>
			sortArray(search ? songsFilter : songs, getComparator('asc', 'title')),
		[page, songsPerPage, search, modealSearchIsOpen, songs]
	);

	const handlePlay = (id: number) => {
		dispatch(setIdSelect(id));
	};

	const emptyRows =
		songsPerPage - Math.min(songsPerPage, songs.length - page * songsPerPage);

	const handleChangePage = (
		event: React.MouseEvent<HTMLButtonElement> | null,
		newPage: number
	) => {
		setPage(newPage);
	};

	const handleChangeRowsPerPage = (
		event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		setSongsPerPage(parseInt(event.target.value, 10));
		setPage(0);
	};

	return (
		<TableContainer component={Paper}>
			<Table aria-label='Tabla de canciones' sx={{ minWidth: 500 }}>
				<MTableHead />
				<TableBody>
					{(songsPerPage > 0
						? visibleSongs.slice(
								page * songsPerPage,
								page * songsPerPage + songsPerPage
						  )
						: visibleSongs
					).map((song: any, index: number) => (
						<TableRow
							key={song.id}
							sx={{
								'&:hover': {
									backgroundColor: '#f5f5f5',
									cursor: 'pointer',
								},
							}}
							onClick={() => handlePlay(song.id)}
						>
							<TableCell align='left'>{index + 1}</TableCell>
							<TableCell align='right'>
								<MuiAvatar src={song.image_path} title={song.title} />
							</TableCell>
							<TableCell align='left'>{song.title}</TableCell>
							<TableCell align='left'>{song.author}</TableCell>
							<TableCell align='left'>{song.album}</TableCell>
							<TableCell align='left'>{formatDate(song.duration)}</TableCell>
							<TableCell align='left'>
								<Rating name='read-only' value={song.rating} readOnly />
							</TableCell>
							<TableCell align='left'>
								{song.group ? song.group : 'Sin'}
							</TableCell>
						</TableRow>
					))}
					{emptyRows > 0 && (
						<TableRow style={{ height: 53 * emptyRows }}>
							<TableCell colSpan={6} />
						</TableRow>
					)}
				</TableBody>
				<TableFooter>
					<TableRow>
						<TablePagination
							rowsPerPageOptions={[5, 10, { label: 'All', value: -1 }]}
							colSpan={3}
							count={songs.length}
							rowsPerPage={songsPerPage}
							labelRowsPerPage={'Canciones por pagina'}
							labelDisplayedRows={({ from, to, count }) =>
								`${from}-${to} de ${count}`
							}
							page={page}
							SelectProps={{
								inputProps: { 'aria-label': 'Canciones por pagina' },
								native: true,
							}}
							sx={{ overflow: 'hidden', width: '100%' }}
							onPageChange={handleChangePage}
							onRowsPerPageChange={handleChangeRowsPerPage}
							ActionsComponent={TablePaginationAction}
						/>
					</TableRow>
				</TableFooter>
			</Table>
		</TableContainer>
	);
}
