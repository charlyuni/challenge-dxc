import { render, screen, fireEvent } from '@testing-library/react';

import AudioControls from './AudioControls';

describe('AudioControls', () => {
	test('renders the correct icons and triggers the corresponding callbacks', () => {
		const handleReverse = jest.fn();
		const isPlaying = false;
		const togglePausePlay = jest.fn();
		const handleForward = jest.fn();

		render(
			<AudioControls
				handleReverse={handleReverse}
				isPlaying={isPlaying}
				togglePausePlay={togglePausePlay}
				handleForward={handleForward}
			/>
		);

		const rewindIcon = screen.getByLabelText('Rewind Icon');
		const playIcon = screen.getByLabelText('Play Icon');
		const forwardIcon = screen.getByLabelText('Forward Icon');

		expect(rewindIcon).toBeInTheDocument();
		expect(playIcon).toBeInTheDocument();
		expect(forwardIcon).toBeInTheDocument();

		fireEvent.click(rewindIcon);
		fireEvent.click(playIcon);
		fireEvent.click(forwardIcon);

		expect(handleReverse).toHaveBeenCalledTimes(1);
		expect(togglePausePlay).toHaveBeenCalledTimes(1);
		expect(handleForward).toHaveBeenCalledTimes(1);
	});

	test('renders the Pause icon when isPlaying is true', () => {
		const handleReverse = jest.fn();
		const isPlaying = true;
		const togglePausePlay = jest.fn();
		const handleForward = jest.fn();

		render(
			<AudioControls
				handleReverse={handleReverse}
				isPlaying={isPlaying}
				togglePausePlay={togglePausePlay}
				handleForward={handleForward}
			/>
		);

		const pauseIcon = screen.getByLabelText('Pause Icon');

		expect(pauseIcon).toBeInTheDocument();
	});

	test('renders the Play icon when isPlaying is false', () => {
		const handleReverse = jest.fn();
		const isPlaying = false;
		const togglePausePlay = jest.fn();
		const handleForward = jest.fn();

		render(
			<AudioControls
				handleReverse={handleReverse}
				isPlaying={isPlaying}
				togglePausePlay={togglePausePlay}
				handleForward={handleForward}
			/>
		);

		const playIcon = screen.getByLabelText('Play Icon');

		expect(playIcon).toBeInTheDocument();
	});
});
