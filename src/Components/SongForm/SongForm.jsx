import React, { useState } from 'react';
import { connect } from 'react-redux';

import TextField from '@mui/material/TextField';

const SongForm = props => {
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
				value={props.songForm.title}
				onChange={e => {
					props.setSongForm({ title: e.target.value });
				}}
				label='Title'
				variant='outlined'
			/>
			<TextField
				className='mb-3'
				size='small'
				fullWidth
				value={props.songForm.artist}
				onChange={e => {
					props.setSongForm({ artist: e.target.value });
				}}
				label='Artist'
				variant='outlined'
			/>
			<TextField
				className='mb-3'
				size='small'
				fullWidth
				value={props.songForm.album}
				onChange={e => {
					props.setSongForm({ album: e.target.value });
				}}
				label='Album'
				variant='outlined'
			/>
			<TextField
				className='mb-3'
				size='small'
				fullWidth
				value={props.songForm.genre}
				onChange={e => {
					props.setSongForm({ genre: e.target.value });
				}}
				label='Genre'
				variant='outlined'
			/>
			<TextField
				className='mb-3'
				size='small'
				fullWidth
				value={props.songForm.release_date}
				onChange={e => {
					props.setSongForm({ release_date: e.target.value });
				}}
				label='Release Date'
				variant='outlined'
				type='date'
			/>
		</form>
	);
};

const mapStateToProps = state => {
	return { songForm: state.songForm };
};
import { setSongForm } from './redux.js';

export default connect(mapStateToProps, { setSongForm })(SongForm);
