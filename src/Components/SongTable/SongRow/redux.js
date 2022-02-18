// ACTIONS
const SET = '/selectedSong/SET';

// REDUCERS
export function selectedSong(state = {}, action = {}) {
	switch (action.type) {
		case SET:
			return { ...action.payload };
		default:
			return state;
	}
}

// ACTION CREATORS
export function setSelectedSong(song) {
	return { type: SET, payload: song };
}
