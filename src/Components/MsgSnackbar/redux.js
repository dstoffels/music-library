import React from 'react';
import { clearForm } from '../SongForm/redux.js';
import SnackbarAction from './SnackbarAction/SnackbarAction.jsx';

// ACTION TYPES
const SHOW = '/MsgSnackbar/SHOW';
const HIDE = '/MsgSnackbar/HIDE';
const SET = '/MsgSnackbar/SET_MSG';
const CLEAR = '/MsgSnackbar/CLEAR_MSG';

// REDUCERS
export function displaySnackbar(state = false, action = {}) {
	switch (action.type) {
		case SHOW:
			return true;
		case HIDE:
			return false;
		default:
			return state;
	}
}

const INITIAL_STATE = { msg: '', actionComponent: <SnackbarAction /> };

export function snackbarMessage(state = INITIAL_STATE, action = {}) {
	switch (action.type) {
		case SET:
			return { ...state, ...action.payload };
		case CLEAR:
			return { ...INITIAL_STATE };
		default:
			return state;
	}
}

// ACTIONS
function showMsgSnackbar() {
	return { type: SHOW };
}

function hideMsgSnackbar() {
	return { type: HIDE };
}

function setMsg(msg, actionComponent) {
	return { type: SET, payload: { msg, actionComponent } };
}

// THUNKS
export function openSnackbar(msg, actionComponent) {
	return (dispatch, getState) => {
		dispatch(hideMsgSnackbar());
		dispatch(setMsg(msg, actionComponent));
		dispatch(showMsgSnackbar());
	};
}

export function closeSnackbar() {
	return (dispatch, getState) => {
		dispatch(hideMsgSnackbar());
	};
}
