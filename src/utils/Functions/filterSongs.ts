import { Song } from '@types';

export const filterSongs = (array: Song[], keyword: string) => {
	const results = [];

	const lowercaseKeyword = keyword.toLowerCase();

	for (let i = 0; i < array.length; i++) {
		const item = array[i];
		const lowercaseTitle = item.title.toLowerCase();
		const lowercaseAuthor = item.author.toLowerCase();

		if (
			lowercaseTitle.includes(lowercaseKeyword) ||
			lowercaseAuthor.includes(lowercaseKeyword)
		) {
			results.push(item);
		}
	}
	return results;
};
