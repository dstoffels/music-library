import React from 'react';
import axios from 'axios';

import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import Badge from '@mui/material/Badge';
import PlayCircleFilledOutlinedIcon from '@mui/icons-material/PlayCircleFilledOutlined';

import './SongRow.css';

const SongRow = ({ song, editSong, openDeleteModal }) => {
	const { title, album, artist, genre, release_date, likes } = song;
	const dispatch = useDispatch();

	const handleClick = e => {
		editSong(song);
	};

	const handlePlay = async e => {
		e.stopPropagation();
		await axios.put(endpoint(`${song.id}/like`));
		dispatch(getAllSongs());
	};

	const handleDeleteModal = e => {
		e.stopPropagation();
		openDeleteModal(song);
	};

	return (
		<>
			<tr onClick={handleClick} className='song-row'>
				<td>
					<Badge onClick={handlePlay} className='play-btn' color='secondary' badgeContent={likes}>
						<PlayCircleFilledOutlinedIcon fontSize='large' color='success' />
					</Badge>
					{title}
				</td>
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

import { connect, useDispatch } from 'react-redux';
import { editSong } from '../../EditModal/redux.js';
import { openDeleteModal } from '../../DeleteModal/redux.js';
import { endpoint } from '../../../API.js';
import { getAllSongs } from '../redux.js';

export default connect(null, { editSong, openDeleteModal })(SongRow);
