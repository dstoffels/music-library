import axios from 'axios';
import { endpoint } from '../../API.js';

// ACTION TYPES
const GET = '/SongLibrary/GET';
const FILTER_AND_SORT = '/SongLibrary/FILTER_AND_SORT';

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
		case FILTER_AND_SORT:
			return [...action.payload];
		default:
			return state;
	}
}

// ACTION CREATORS
function setAllSongs(songs) {
	return { type: GET, payload: songs };
}

function setFilteredSongs(songs) {
	return { type: FILTER_AND_SORT, payload: songs };
}

// THUNKS
export function getAllSongs() {
	return async dispatch => {
		const response = await axios.get(endpoint());
		dispatch(setAllSongs(response.data));
	};
}

export function sortSongs(songs = []) {
	return (dispatch, getState) => {
		const { sorting, filteredSongs } = getState();
		songs = songs.length ? songs : [...filteredSongs];

		songs.sort((a, b) => {
			return sorting.ascending
				? a[sorting.column].localeCompare(b[sorting.column])
				: b[sorting.column].localeCompare(a[sorting.column]);
		});

		dispatch(setFilteredSongs(songs));
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
		dispatch(sortSongs(searchResults));
	};
}
