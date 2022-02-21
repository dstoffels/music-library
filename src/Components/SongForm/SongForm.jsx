import React from 'react';
import { connect } from 'react-redux';

import TextField from '@mui/material/TextField';

const SongForm = ({ id, songForm, setFormField, saveSong, clearForm }) => {
	const { title, artist, album, genre, release_date } = songForm;

	const handleSubmit = e => {
		e.preventDefault();
		saveSong();
		clearForm();
	};

	return (
		<form id={id} onSubmit={handleSubmit}>
			<TextField
				className='mb-3'
				size='small'
				fullWidth
				value={title}
				onChange={e => {
					setFormField('title', e.target.value);
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
					setFormField('artist', e.target.value);
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
					setFormField('album', e.target.value);
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
					setFormField('genre', e.target.value);
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
					setFormField('release_date', e.target.value);
				}}
				label='Release Date'
				variant='outlined'
				type='date'
			/>
		</form>
	);
};

// REDUX

import { setFormField, clearForm } from './redux.js';

const mapStateToProps = state => {
	return { songForm: state.songForm, song: state.selectedSong, editModal: state.editModal };
};

export default connect(mapStateToProps, { setFormField, clearForm })(SongForm);
