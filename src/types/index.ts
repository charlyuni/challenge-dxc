export interface LoginInput {
	emailUser: string;
	passwordUser: string;
}

export interface LoginOutput extends LoginInput {
	id: number;
	name: string;
	token: string;
}

export interface Token {
	token: string;
}

export type User = {
	id: number;
	emailUser: string;
	passwordUser?: number;
	name: string;
} | null;

export interface SearchSpotfyInput {
	search: string;
	tpye: string;
	offset: number;
	limit: number;
	numberOfTopResults: number;
}

export interface Song {
	id: number;
	created_at: string;
	title: string;
	src: string;
	image_path: string;
	duration: number;
	rating: number;
	group: any;
	album: string;
	song_number: number;
	author: string;
	news?: boolean;
}
