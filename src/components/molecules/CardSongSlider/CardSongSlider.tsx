import 'swiper/css';
import 'swiper/css/pagination';
import { Box } from '@mui/material';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import SongCard from '../SongCard/SongCard';
import { styles } from './styles';

const CardSongSlider = ({ songs }: any) => {
	return (
		<Box sx={styles.swiperPaginationBullet}>
			<Swiper
				modules={[Pagination]}
				freeMode={true}
				slidesPerView={'auto'}
				autoplay={{ delay: 2000 }}
				spaceBetween={10}
				scrollbar={{ draggable: false }}
				pagination={{
					clickable: true,
				}}
			>
				{songs.map((variant: any, index: number) => (
					<SwiperSlide
						key={index}
						style={{
							maxWidth: `300px`,
							minHeight: `175px`,
						}}
					>
						<SongCard
							title={variant.title}
							image={variant.image_path}
							id={variant.id}
							author={variant.author}
							newSong={variant.news}
						/>
					</SwiperSlide>
				))}
			</Swiper>
		</Box>
	);
};

export default CardSongSlider;
