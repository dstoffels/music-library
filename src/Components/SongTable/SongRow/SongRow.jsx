import React from 'react';
import axios from 'axios';

import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
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
			<TableRow hover onClick={handleClick} className='song-row'>
				<TableCell>
					<Badge onClick={handlePlay} className='play-btn' color='secondary' badgeContent={likes}>
						<PlayCircleFilledOutlinedIcon fontSize='large' color='success' />
					</Badge>
				</TableCell>
				<TableCell>{title}</TableCell>
				<TableCell>{artist}</TableCell>
				<TableCell>{album}</TableCell>
				<TableCell>{genre}</TableCell>
				<TableCell>{release_date}</TableCell>
				<TableCell>
					<Button color='error' onClick={handleDeleteModal}>
						<DeleteIcon />
					</Button>
				</TableCell>
			</TableRow>
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
