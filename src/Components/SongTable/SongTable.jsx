import axios from 'axios';
import React, { useEffect, useState } from 'react';

import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';

import { Table } from 'react-bootstrap';
import { endpoint } from '../../API.js';
import SongRow from './SongRow/SongRow.jsx';

import './SongTable.css';
import NewSongModal from '../NewSongModal/NewSongModal.jsx';

const SongTable = ({ searchCriterion }) => {
	const [allSongs, setAllSongs] = useState([]);
	const [filteredSongs, setFilteredSongs] = useState([]);
	const [showNewModal, setShowNewModal] = useState(false);

	useEffect(() => {
		fetchSongs();
	}, []);

	async function fetchSongs() {
		let response = await axios.get(endpoint());
		setAllSongs(response.data);
		setFilteredSongs(response.data);
	}

	useEffect(() => {
		filterSongs();
	}, [searchCriterion]);

	function filterSongs() {
		let searchResults = allSongs.filter(({ title, artist, album, genre, release_date }) => {
			const criterion = searchCriterion.toLowerCase();
			return (
				title.toLowerCase().includes(criterion) ||
				artist.toLowerCase().includes(criterion) ||
				album.toLowerCase().includes(criterion) ||
				genre.toLowerCase().includes(criterion) ||
				release_date.toLowerCase().includes(criterion)
			);
		});

		setFilteredSongs(searchResults);
	}

	async function createSong(songData) {
		await axios.post(endpoint(), songData);
		fetchSongs();
	}

	async function editSong(songData, id) {
		await axios.put(endpoint(id), songData);
		fetchSongs();
	}

	async function deleteSong(id) {
		await axios.delete(endpoint(id));
		fetchSongs();
	}

	const songRows = filteredSongs.map(song => (
		<SongRow key={song.id} song={song} deleteSong={deleteSong} editSong={editSong} />
	));

	return (
		<>
			<NewSongModal show={showNewModal} setShow={setShowNewModal} createSong={createSong} />
			<Table striped hover>
				<thead>
					<tr>
						<th>Title</th>
						<th>Artist</th>
						<th>Album</th>
						<th>Genre</th>
						<th>Release Date</th>
						<th>
							<Button
								onClick={() => {
									setShowNewModal(true);
								}}
								variant='outlined'>
								<AddIcon />
							</Button>
						</th>
					</tr>
				</thead>
				<tbody>{songRows}</tbody>
			</Table>
		</>
	);
};

export default SongTable;
