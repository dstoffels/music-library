import axios from 'axios';
import React from 'react';

import { endpoint } from '../../API.js';
import { createSong } from '../CreateModal/redux.js';
import { closeEditModal } from '../EditModal/redux.js';
import { openSnackbar } from '../MsgSnackbar/redux.js';
import SnackbarAction from '../MsgSnackbar/SnackbarAction/SnackbarAction.jsx';
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
export function openDeleteModal() {
	return (dispatch, getState) => {
		const song = getState().songForm;
		dispatch(populateForm(song));
		dispatch(showDeleteModal());
	};
}

export function closeDeleteModal() {
	return dispatch => {
		dispatch(closeEditModal());
		dispatch(hideDeleteModal());
	};
}

export function deleteSong() {
	return async (dispatch, getState) => {
		const song = getState().songForm;
		await axios.delete(endpoint(song.id));
		dispatch(getAllSongs());
		dispatch(closeDeleteModal());
		dispatch(
			openSnackbar(
				`Deleted "${song.title}"`,
				<SnackbarAction title='UNDO' onClick={() => dispatch(createSong(song))} />,
			),
		);
	};
}
