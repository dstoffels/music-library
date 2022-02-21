import axios from 'axios';
import { endpoint } from '../../API.js';
import { clearForm } from '../SongForm/redux.js';
import { getAllSongs } from '../SongTable/redux.js';

// ACTION TYPES
const SHOW = '/CreateModal/SHOW';
const HIDE = '/CreateModal/HIDE';

// REDUCERS
export function createModal(state = false, action = {}) {
	switch (action.type) {
		case SHOW:
			return true;
		case HIDE:
			return false;
		default:
			return state;
	}
}

// ACTION CREATORS
function showCreateModal() {
	return { type: SHOW };
}

function hideCreateModal() {
	return { type: HIDE };
}

// THUNKS
export function openCreateModal() {
	return dispatch => {
		dispatch(clearForm());
		dispatch(showCreateModal());
	};
}

export function closeCreateModal() {
	return dispatch => {
		dispatch(clearForm());
		dispatch(hideCreateModal());
	};
}

export function createSong(song) {
	return async dispatch => {
		await axios.post(endpoint(), song);
		dispatch(hideCreateModal());
		dispatch(getAllSongs());
	};
}
