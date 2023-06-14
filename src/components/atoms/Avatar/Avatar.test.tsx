import { render, screen } from '@testing-library/react';

import MuiAvatar from './Avatar';

describe('MuiAvatar', () => {
	test('renders the avatar with correct src and alt text', () => {
		const src = 'https://source.unsplash.com/random/?player';
		const title = 'Avatar Title';

		render(<MuiAvatar src={src} title={title} />);

		const avatarElement = screen.getByAltText(title);

		expect(avatarElement).toBeInTheDocument();
		expect(avatarElement.getAttribute('src')).toBe(src);
	});
});
