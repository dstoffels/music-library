import React from 'react';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';

import './SongRow.css';

const SongRow = ({ song, setSelectedSong, showEditModal, showDeleteModal }) => {
	const { title, album, artist, genre, release_date } = song;

	const handleClick = e => {
		e.stopPropagation();
		setSelectedSong(song);
		showEditModal();
	};

	const handleDeleteModal = e => {
		e.stopPropagation();
		setSelectedSong(song);
		showDeleteModal();
	};

	return (
		<>
			<tr onClick={handleClick} className='song-row'>
				<td>{title}</td>
				<td>{artist}</td>
				<td>{album}</td>
				<td>{genre}</td>
				<td>{release_date}</td>
				<td>
					<Button color='error' onClick={handleDeleteModal}>
						<DeleteIcon />
					</Button>
				</td>
			</tr>
		</>
	);
};

// REDUX

import { connect } from 'react-redux';
import { setSelectedSong } from './redux.js';
import { showEditModal } from '../../EditModal/redux.js';
import { showDeleteModal } from '../../DeleteModal/redux.js';

export default connect(null, { setSelectedSong, showEditModal, showDeleteModal })(SongRow);
