import { TableCell, TableHead, TableRow } from '@mui/material';

interface HeadCell {
	id: string;
	label: string;
}

const headCells: HeadCell[] = [
	{ id: 'id', label: 'Indice' },
	{ id: 'photo', label: 'Portada' },
	{ id: 'name', label: 'Canción' },
	{ id: 'author', label: 'Artista' },
	{ id: 'album', label: 'Album' },
	{ id: 'duration', label: 'Duración' },
	{ id: 'rating', label: 'Calificación' },
	{ id: 'group', label: 'Grupo' },
];

const MTableHead = () => {
	return (
		<TableHead>
			<TableRow>
				{headCells.map((headCell) => (
					<TableCell
						key={headCell.id}
						align='left'
						sx={{
							color: '#black',
							fontWeight: 'bold',
							fontSize: '1.2rem',
						}}
						padding='normal'
					>
						{headCell.label}
					</TableCell>
				))}
			</TableRow>
		</TableHead>
	);
};

export default MTableHead;
