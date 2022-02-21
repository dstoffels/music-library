import axios from 'axios';
import React, { useEffect } from 'react';

import { Table } from 'react-bootstrap';
import { connect } from 'react-redux';
import SongRow from './SongRow/SongRow.jsx';

import './SongTable.css';
import SongTableHeader from './SongTableHeader/SongTableHeader.jsx';

//TODO: implement sorting for each column

const SongLibrary = ({ filteredSongs, filterSongs, allSongs, searchFilter, getAllSongs }) => {
	useEffect(() => {
		getAllSongs();
	}, []);

	useEffect(() => {
		filterSongs();
	}, [allSongs, searchFilter]);

	const songRows = filteredSongs.map(song => <SongRow key={song.id} song={song} />);

	return (
		<Table striped hover>
			<SongTableHeader />
			<tbody>{songRows}</tbody>
		</Table>
	);
};

// REDUX

import { getAllSongs, filterSongs } from './redux.js';

const mapStateToProps = state => {
	return {
		allSongs: state.allSongs,
		filteredSongs: state.filteredSongs,
		searchFilter: state.searchFilter,
	};
};

export default connect(mapStateToProps, { getAllSongs, filterSongs })(SongLibrary);
