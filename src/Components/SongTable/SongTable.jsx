import React, { useEffect } from 'react';

import Table from '@mui/material/Table';
import { connect } from 'react-redux';
import SongRow from './SongRow/SongRow.jsx';

import './SongTable.css';
import SongTableHeader from './SongTableHeader/SongTableHeader.jsx';
import TableContainer from '@mui/material/TableContainer';
import TableBody from '@mui/material/TableBody';
import Paper from '@mui/material/Paper';

const SongTable = ({ filteredSongs, filterSongs, allSongs, searchFilter, getAllSongs }) => {
	useEffect(() => {
		getAllSongs();
	}, []);

	useEffect(() => {
		filterSongs();
	}, [allSongs, searchFilter]);

	const songRows = filteredSongs.map(song => <SongRow key={song.id} song={song} />);

	return (
		<Paper sx={{ width: '100%' }}>
			<TableContainer sx={{ maxHeight: '90vh' }}>
				<Table size='small' stickyHeader={true} aria-label='sticky table'>
					<SongTableHeader />
					<TableBody>{songRows}</TableBody>
				</Table>
			</TableContainer>
		</Paper>
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
