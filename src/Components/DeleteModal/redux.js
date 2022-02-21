import axios from 'axios';
import { endpoint } from '../../API.js';
import { clearForm, populateForm } from '../SongForm/redux.js';
import { getAllSongs } from '../SongTable/redux.js';

// ACTION TYPES
const SHOW = '/DeleteModal/SHOW';
const HIDE = '/DeleteModal/HIDE';
const DELETE = '/DeleteModal/DELETE';

// REDUCERS

export function deleteModal(state = false, action = {}) {
	switch (action.type) {
		case SHOW:
			return true;
		case HIDE:
			return false;
		case DELETE:
			return false;
		default:
			return state;
	}
}

// ACTION CREATORS
function showDeleteModal() {
	return { type: SHOW };
}
function hideDeleteModal() {
	return { type: HIDE };
}

// THUNKS
export function openDeleteModal(song) {
	return dispatch => {
		dispatch(populateForm(song));
		dispatch(showDeleteModal());
	};
}

export function closeDeleteModal() {
	return dispatch => {
		dispatch(clearForm());
		dispatch(hideDeleteModal());
	};
}

export function deleteSong() {
	return async function thunk(dispatch, getState) {
		const id = getState().songForm.id;
		await axios.delete(endpoint(id));
		dispatch(getAllSongs());
		dispatch(closeDeleteModal());
	};
}
