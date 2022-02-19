import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import TextField from '@mui/material/TextField';

const SongForm = ({ id, songForm, setSongForm, handleSubmit }) => {
	const { title, artist, album, genre, release_date } = songForm;

	return (
		<form id={id} onSubmit={handleSubmit}>
			<TextField
				className='mb-3'
				size='small'
				fullWidth
				value={title}
				onChange={e => {
					setSongForm({ title: e.target.value });
				}}
				label='Title'
				variant='outlined'
			/>
			<TextField
				className='mb-3'
				size='small'
				fullWidth
				value={artist}
				onChange={e => {
					setSongForm({ artist: e.target.value });
				}}
				label='Artist'
				variant='outlined'
			/>
			<TextField
				className='mb-3'
				size='small'
				fullWidth
				value={album}
				onChange={e => {
					setSongForm({ album: e.target.value });
				}}
				label='Album'
				variant='outlined'
			/>
			<TextField
				className='mb-3'
				size='small'
				fullWidth
				value={genre}
				onChange={e => {
					setSongForm({ genre: e.target.value });
				}}
				label='Genre'
				variant='outlined'
			/>
			<TextField
				className='mb-3'
				size='small'
				fullWidth
				value={release_date}
				onChange={e => {
					setSongForm({ release_date: e.target.value });
				}}
				label='Release Date'
				variant='outlined'
				type='date'
			/>
		</form>
	);
};

// REDUX

import { setSongForm, clearForm, updateSong, createSong } from './redux.js';

const mapStateToProps = state => {
	return { songForm: state.songForm, song: state.selectedSong, editModal: state.editModal };
};

export default connect(mapStateToProps, { setSongForm, clearForm })(SongForm);
