import { sortSongs } from '../../redux.js';

// ACTION TYPES
const UPDATE = '/SongTableHeader/UPDATE_SORTING';

// REDUCERS
const DEFAULT_STATE = { column: 'release_date', ascending: true };
export function sorting(state = DEFAULT_STATE, action = {}) {
	switch (action.type) {
		case UPDATE:
			return { ...state, ...action.payload };
		default:
			return state;
	}
}

// ACTION CREATORS
function changeColumn(column) {
	return { type: UPDATE, payload: { column: column.toLowerCase() } };
}

// THUNKS
export function changeSortingColumn(column) {
	return dispatch => {
		dispatch(changeColumn(column));
		dispatch(sortSongs());
	};
}

export function toggleAscendingOrder() {
	return (dispatch, getState) => {
		const { sorting } = getState();
		dispatch({ type: UPDATE, payload: { ascending: !sorting.ascending } });
		dispatch(sortSongs());
	};
}
