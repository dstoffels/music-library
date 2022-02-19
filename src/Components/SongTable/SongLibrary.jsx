import axios from 'axios';
import React, { useEffect } from 'react';

import { Table } from 'react-bootstrap';
import { connect } from 'react-redux';
import SongRow from './SongRow/SongRow.jsx';

import './SongTable.css';
import SongTableHeader from './SongTableHeader/SongTableHeader.jsx';

//TODO: implement sorting for each column

const SongTable = props => {
	useEffect(() => {
		props.getAllSongs();
	}, []);

	useEffect(() => {
		props.filterSongs(props.allSongs, props.searchFilter);
	}, [props.allSongs, props.searchFilter]);

	const songRows = props.filteredSongs.map(song => <SongRow key={song.id} song={song} />);

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

export default connect(mapStateToProps, { getAllSongs, filterSongs })(SongTable);
