import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import SongRow from './SongRow/SongRow.jsx';

import './SongTable.css';

const SongTable = ({ searchCriterion }) => {
	const [allSongs, setAllSongs] = useState([]);
	const [filteredSongs, setFilteredSongs] = useState([]);

	useEffect(() => {
		fetchSongs();
	}, []);

	async function fetchSongs() {
		let response = await axios.get('http://www.devcodecampmusiclibrary.com/api/music');
		setAllSongs(response.data);
		setFilteredSongs(response.data);
	}

	useEffect(() => {
		filterSongs();
	}, [searchCriterion]);

	function filterSongs() {
		let searchResults = allSongs.filter(({ title, artist, album, genre, releaseDate }) => {
			const criterion = searchCriterion.toLowerCase();
			return searchCriterion
				? title.toLowerCase().includes(criterion) ||
						artist.toLowerCase().includes(criterion) ||
						album.toLowerCase().includes(criterion) ||
						genre.toLowerCase().includes(criterion) ||
						releaseDate.toLowerCase().includes(criterion)
				: true;
		});

		setFilteredSongs(searchResults);
	}

	const songRows = filteredSongs.map(song => <SongRow key={song.id} song={song} />);

	return (
		<>
			<Table>
				<thead>
					<tr>
						<th>Title</th>
						<th>Artist</th>
						<th>Album</th>
						<th>Genre</th>
						<th>Release Date</th>
					</tr>
				</thead>
				<tbody>{songRows}</tbody>
			</Table>
		</>
	);
};

export default SongTable;
