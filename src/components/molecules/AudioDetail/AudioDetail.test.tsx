import { render, screen } from '@testing-library/react';

import AudioDetail, { AudioDetailProps } from './AudioDetail';

const renderArray: AudioDetailProps['renderArray'] = [
	{
		id: 1,
		created_at: '2023-06-01',
		title: 'Example Title',
		src: 'example.mp3',
		image_path: 'example.jpg',
		duration: 180,
		rating: 4,
		group: null,
		album: 'Example Album',
		song_number: 1,
		author: 'Example Author',
		news: true,
	},
];

describe('AudioDetail', () => {
	test('renders the author and title', () => {
		render(<AudioDetail renderArray={renderArray} />);

		const authorText = screen.getByText('Example Author');
		const titleText = screen.getByText('Example Title');

		expect(authorText).toBeInTheDocument();
		expect(titleText).toBeInTheDocument();
	});
});
