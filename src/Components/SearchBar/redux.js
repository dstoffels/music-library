//ACTION TYPES
const UPDATE = '/SearchBar/UPDATE';

//REDUCER
export function searchFilter(state = '', action = {}) {
	switch (action.type) {
		case UPDATE:
			return action.payload;
		default:
			return state;
	}
}

// ACTION CREATORS

export function setSearchFilter(criterion = '') {
	return { type: UPDATE, payload: criterion };
}
