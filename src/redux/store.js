import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import asyncActions from './Middlewares/asyncActions.js';

import { allSongs, filteredSongs } from '../Components/SongTable/redux.js';
import { searchFilter } from '../Components/SearchBar/redux.js';
import { songForm } from '../Components/SongForm/redux.js';
import { editModal } from '../Components/EditModal/redux.js';
import { deleteModal } from '../Components/DeleteModal/redux.js';
import { createModal } from '../Components/CreateModal/redux.js';
import { selectedSong } from '../Components/SongTable/SongRow/redux.js';
import thunk from 'redux-thunk';

// REDUCERS
const rootreducer = combineReducers({
	allSongs,
	filteredSongs,
	searchFilter,
	songForm,
	editModal,
	deleteModal,
	createModal,
	selectedSong,
});

// DEVTOOLS
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// STORE
const store = createStore(rootreducer, composeEnhancers(applyMiddleware(asyncActions, thunk)));

export default store;
