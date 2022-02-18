// ACTION TYPES
const SHOW = '/CreateModal/SHOW';
const HIDE = '/CreateModal/HIDE';

// REDUCERS

export function createModal(state = false, action = {}) {
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
export function showCreateModal() {
	return { type: SHOW };
}
export function hideCreateModal() {
	return { type: HIDE };
}
