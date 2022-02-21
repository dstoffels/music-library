import axios from 'axios';
import { endpoint } from '../../API.js';

// ACTION TYPES
const GET = '/SongLibrary/GET';
const SEARCH = '/SongLibrary/SEARCH';

// REDUCERS

export function allSongs(state = [], action = {}) {
	switch (action.type) {
		case GET:
			return [...action.payload];
		default:
			return state;
	}
}

export function filteredSongs(state = [], action = {}) {
	switch (action.type) {
		case SEARCH:
			return [...action.payload];
		default:
			return state;
	}
}

// ACTION CREATORS
function setAllSongs(songs) {
	return { type: GET, payload: songs };
}

// THUNKS
export function getAllSongs() {
	return async dispatch => {
		const response = await axios.get(endpoint());
		dispatch(setAllSongs(response.data));
	};
}

export function filterSongs() {
	return (dispatch, getState) => {
		const { allSongs, searchFilter } = getState();

		const criterion = searchFilter.toLowerCase();
		const searchResults = allSongs.filter(({ title, artist, album, genre, release_date }) => {
			return (
				title.toLowerCase().includes(criterion) ||
				artist.toLowerCase().includes(criterion) ||
				album.toLowerCase().includes(criterion) ||
				genre.toLowerCase().includes(criterion) ||
				release_date.toLowerCase().includes(criterion)
			);
		});
		dispatch({ type: SEARCH, payload: [...searchResults] });
	};
}
