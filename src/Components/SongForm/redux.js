import axios from 'axios';
import { endpoint } from '../../API.js';

// ACTION TYPES
const EDIT = '/SongForm/EDIT';
const SET = '/SongForm/SET';
const CLEAR = '/SongForm/CLEAR';
const SUBMIT_EDIT = '/SongForm/SUBMIT_EDIT';
const SUBMIT_NEW = '/SongForm/SUBMIT_NEW';

// DEFAULT STATE
const date = new Date();
const EMPTY_FORM = {
	title: '',
	artist: '',
	album: '',
	genre: '',
	release_date: `${date.getFullYear()}-${
		date.getMonth() < 9 ? `0${date.getMonth() + 1}` : date.getMonth() + 1
	}-${date.getDate()}`,
	image: null,
	likes: 0,
};

// REDUCERS
export function songForm(state = EMPTY_FORM, action = {}) {
	switch (action.type) {
		case EDIT:
			return { ...action.payload };
		case SET:
			return { ...state, ...action.payload };
		case CLEAR:
			return { ...EMPTY_FORM };
		case SUBMIT_EDIT:
			axios.put(endpoint(action.payload.id), state);
			return { ...EMPTY_FORM };
		case SUBMIT_NEW:
			axios.post(endpoint(), state);
			return { ...EMPTY_FORM };
		default:
			return state;
	}
}

// ACTION CREATORS
export function populateForm(values) {
	return { type: EDIT, payload: values };
}

export function setSongForm(kvp) {
	return { type: SET, payload: kvp };
}

export function clearForm() {
	return { type: CLEAR };
}

export function updateSong() {
	return { type: SUBMIT_EDIT };
}

export function createSong() {
	return { type: SUBMIT_NEW };
}
