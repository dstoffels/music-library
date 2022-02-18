import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import asyncActions from './Middlewares/asyncActions.js';

import { allSongs, filteredSongs } from '../Components/SongTable/redux.js';
import { searchFilter } from '../Components/SearchBar/redux.js';
import thunk from 'redux-thunk';

// REDUCERS
const rootreducer = combineReducers({ allSongs, filteredSongs, searchFilter });

// DEVTOOLS
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// STORE
const store = createStore(rootreducer, composeEnhancers(applyMiddleware(asyncActions, thunk)));

export default store;
