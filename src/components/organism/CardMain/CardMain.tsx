import { Card, CardContent, Typography } from '@mui/material';
import { RootState } from '@redux/store';
import { useDispatch, useSelector } from 'react-redux';

import { setSearchValue } from '../../../redux/features/modalSearchOpen';
import FilterSelect from '../../atoms/FilterSelect/FilterSelect';
import TableSongs from '../../molecules/TableSongs/TableSongs';
const CardMain = () => {
	const dispatch = useDispatch();
	const { search } = useSelector((state: RootState) => state.modalSearhOpen);

	const handleDelete = () => {
		dispatch(setSearchValue(''));
	};

	return (
		<Card sx={{ width: '100%', backgroundColor: 'transparent' }}>
			<CardContent
				sx={{
					display: 'flex',
					flexDirection: 'row',
					alignItems: 'center',
					justifyContent: 'space-between',
				}}
			>
				<Typography
					variant='generalTitle'
					component='span'
					sx={{ color: 'white' }}
				>
					Listado de canciones
				</Typography>
				{search && <FilterSelect valueLabel={search} onClick={handleDelete} />}
			</CardContent>

			<TableSongs />
		</Card>
	);
};

export default CardMain;
