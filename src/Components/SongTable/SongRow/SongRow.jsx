import React from 'react';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import Badge from '@mui/material/Badge';
import PlayCircleFilledOutlinedIcon from '@mui/icons-material/PlayCircleFilledOutlined';

import './SongRow.css';

const SongRow = ({ song, editSong, openDeleteModal }) => {
	const { title, album, artist, genre, release_date, likes } = song;

	const handleClick = e => {
		editSong(song);
	};

	const handleDeleteModal = e => {
		e.stopPropagation();
		openDeleteModal(song);
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
					<Badge color='secondary' badgeContent={likes}>
						<PlayCircleFilledOutlinedIcon color='success' />
					</Badge>
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
import { editSong } from '../../EditModal/redux.js';
import { openDeleteModal } from '../../DeleteModal/redux.js';

export default connect(null, { editSong, openDeleteModal })(SongRow);
