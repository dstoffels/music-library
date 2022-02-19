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
export function showEditModal() {
	return { type: SHOW };
}

export function hideEditModal() {
	return { type: HIDE };
}
