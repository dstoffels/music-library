// ACTIONS
const SET = '/selectedSong/SET';
const CLEAR = '/selectedSong/CLEAR';

// REDUCERS
export function selectedSong(state = {}, action = {}) {
	switch (action.type) {
		case SET:
			return { ...action.payload };
		case CLEAR:
			return {};
		default:
			return state;
	}
}

// ACTION CREATORS
export function setSelectedSong(song) {
	return { type: SET, payload: song };
}

export function clearSelectedSong() {
	return { type: CLEAR };
}
