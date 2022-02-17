import React, { useState } from 'react';
import TextField from '@mui/material/TextField';

const date = new Date();
const EMPTY_SONG = {
	title: '',
	artist: '',
	album: '',
	genre: '',
	release_date: `${date.getFullYear()}-${
		date.getMonth() < 9 ? `0${date.getMonth() + 1}` : date.getMonth() + 1
	}-${date.getDate()}`,
	image: null,
	likes: 0,
};

const SongForm = ({ song = EMPTY_SONG, saveSong }) => {
	const [songData, setSongData] = useState({ ...song });

	const handleSubmit = e => {
		e.preventDefault();
		saveSong(songData, song.id);
	};
	return (
		<form id='edit-form' onSubmit={handleSubmit}>
			<TextField
				className='mb-3'
				size='small'
				fullWidth
				value={songData.title}
				onChange={e => {
					setSongData({ ...songData, title: e.target.value });
				}}
				label='Title'
				variant='outlined'
			/>
			<TextField
				className='mb-3'
				size='small'
				fullWidth
				value={songData.artist}
				onChange={e => {
					setSongData({ ...songData, artist: e.target.value });
				}}
				label='Artist'
				variant='outlined'
			/>
			<TextField
				className='mb-3'
				size='small'
				fullWidth
				value={songData.album}
				onChange={e => {
					setSongData({ ...songData, album: e.target.value });
				}}
				label='Album'
				variant='outlined'
			/>
			<TextField
				className='mb-3'
				size='small'
				fullWidth
				value={songData.genre}
				onChange={e => {
					setSongData({ ...songData, genre: e.target.value });
				}}
				label='Genre'
				variant='outlined'
			/>
			<TextField
				className='mb-3'
				size='small'
				fullWidth
				value={songData.release_date}
				onChange={e => {
					setSongData({ ...songData, release_date: e.target.value });
				}}
				label='Release Date'
				variant='outlined'
				type='date'
			/>
		</form>
	);
};

export default SongForm;
