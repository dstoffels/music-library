import axios from 'axios';
import { endpoint } from '../../API.js';

// ACTION TYPES
const GET = '/SongLibrary/GET';
const SEARCH = '/SongLibrary/SEARCH';

// REDUCERS

export function allSongs(state = [], action = {}) {
	switch (action.type) {
		case GET:
			return [...action.payload.data];
		default:
			return state;
	}
}

export function filteredSongs(state = [], action = {}) {
	switch (action.type) {
		case GET:
			return [...action.payload.data];
		case SEARCH:
			let { allSongs, criterion } = action.payload;
			criterion = criterion.toLowerCase();
			const searchResults = allSongs.filter(({ title, artist, album, genre, release_date }) => {
				return (
					title.toLowerCase().includes(criterion) ||
					artist.toLowerCase().includes(criterion) ||
					album.toLowerCase().includes(criterion) ||
					genre.toLowerCase().includes(criterion) ||
					release_date.toLowerCase().includes(criterion)
				);
			});
			return [...searchResults];
		default:
			return state;
	}
}

// ACTION CREATORS

export function getAllSongs() {
	const response = axios.get('http://127.0.0.1:8000/music/');
	return { type: GET, payload: response };
}

export function filterSongs(allSongs = [], criterion = '') {
	return { type: SEARCH, payload: { allSongs, criterion } };
}
