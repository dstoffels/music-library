import axios from 'axios';
import { endpoint } from '../../API.js';
import { clearForm, populateForm } from '../SongForm/redux.js';
import { getAllSongs } from '../SongTable/redux.js';

// ACTION TYPES
const SHOW = '/EditModal/SHOW';
const HIDE = '/EditModal/HIDE';

// REDUCERS

export function editModal(state = false, action = {}) {
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
function showEditModal() {
	return { type: SHOW };
}

function hideEditModal() {
	return { type: HIDE };
}

// THUNKS
export function editSong(song) {
	return (dispatch, getState) => {
		dispatch(showEditModal());
		dispatch(populateForm(song));
	};
}

export function closeEditModal() {
	return (dispatch, getState) => {
		dispatch(clearForm());
		dispatch(hideEditModal());
	};
}

export function updateSong(song) {
	return async function thunk(dispatch, getState) {
		await axios.put(endpoint(song.id), song);
		dispatch(getAllSongs());
		dispatch(clearForm());
		dispatch(hideEditModal());
	};
}
