import axios from 'axios';
import React from 'react';

import { endpoint } from '../../API.js';
import { closeSnackbar, openSnackbar } from '../MsgSnackbar/redux.js';
import SnackbarAction from '../MsgSnackbar/SnackbarAction/SnackbarAction.jsx';
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
		dispatch(populateForm(song));
		dispatch(showEditModal());
	};
}

export function closeEditModal() {
	return (dispatch, getState) => {
		dispatch(hideEditModal());
	};
}

export function updateSong() {
	return async (dispatch, getState) => {
		const song = getState().songForm;
		await axios.put(endpoint(song.id), song);
		dispatch(getAllSongs());
		dispatch(closeEditModal());
		dispatch(openSnackbar(`Updated "${song.title}"`, <SnackbarAction />));
	};
}
