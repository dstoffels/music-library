import React from 'react';
import axios from 'axios';

import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
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
			</TableRow>
		</>
	);
};

// REDUX

import { connect, useDispatch } from 'react-redux';
import { editSong } from '../../EditModal/redux.js';
import { endpoint } from '../../../API.js';
import { getAllSongs } from '../redux.js';

export default connect(null, { editSong })(SongRow);
