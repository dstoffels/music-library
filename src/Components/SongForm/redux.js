// ACTION TYPES
const EDIT = '/SongForm/EDIT';
const SET = '/SongForm/SET';
const CLEAR = '/SongForm/CLEAR';

// DEFAULT STATE
const date = new Date();
const EMPTY_FORM = {
	title: '',
	artist: '',
	album: '',
	genre: '',
	release_date: `${date.getFullYear()}-${
		date.getMonth() < 9 ? `0${date.getMonth() + 1}` : date.getMonth() + 1
	}-${date.getDate()}`,
	image: null,
	likes: 0,
};

// REDUCERS
export function songForm(state = EMPTY_FORM, action = {}) {
	switch (action.type) {
		case EDIT:
			return { ...action.payload };
		case SET:
			return { ...state, ...action.payload };
		case CLEAR:
			return { ...EMPTY_FORM };
		default:
			return state;
	}
}

// ACTION CREATORS
export function populateForm(song) {
	return { type: EDIT, payload: song };
}

export function setFormField(key, value) {
	return { type: SET, payload: { [key]: value } };
}

export function clearForm() {
	return { type: CLEAR };
}
