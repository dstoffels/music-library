import axios from 'axios';
import React, { useEffect, useState } from 'react';

import { Table } from 'react-bootstrap';
import { connect } from 'react-redux';
import { endpoint } from '../../API.js';
import { getAllSongs, filterSongs, allSongs } from './redux.js';
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

	async function createSong(songData) {
		await axios.post(endpoint(), songData);
		refreshSongs();
	}

	// async function editSong(songData, id) {
	// 	await axios.put(endpoint(id), songData);
	// 	refreshSongs();
	// }

	// async function deleteSong(id) {
	// 	await axios.delete(endpoint(id));
	// 	refreshSongs();
	// }

	const songRows = props.filteredSongs.map(song => <SongRow key={song.id} song={song} />);

	return (
		<Table striped hover>
			<SongTableHeader createSong={createSong} />
			<tbody>{songRows}</tbody>
		</Table>
	);
};

const mapStateToProps = state => {
	return {
		allSongs: state.allSongs,
		filteredSongs: state.filteredSongs,
		searchFilter: state.searchFilter,
	};
};

export default connect(mapStateToProps, { getAllSongs, filterSongs })(SongTable);
