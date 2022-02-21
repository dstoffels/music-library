// ACTION TYPES
const SORT = '/SongTableHeader/SORT';

// REDUCERS
const DEFAULT_STATE = { column: 'title', ascending: true };
export function sorting(state = DEFAULT_STATE, action = {}) {
	switch (action.type) {
		case SORT:
			return { ...action.payload };
		default:
			return state;
	}
}

// ACTION CREATORS

// THUNKS
