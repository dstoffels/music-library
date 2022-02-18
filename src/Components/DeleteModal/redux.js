import axios from 'axios';
import { endpoint } from '../../API.js';

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
export function showDeleteModal() {
	return { type: SHOW };
}
export function hideDeleteModal() {
	return { type: HIDE };
}

export function deleteSong(id) {
	axios.delete(endpoint(), id);
	return { type: DELETE };
}
