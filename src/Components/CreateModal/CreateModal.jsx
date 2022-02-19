import Button from '@mui/material/Button';
import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import SongForm from '../SongForm/SongForm.jsx';

const CreateModal = ({ show, hide, clearForm, createSong, getAllSongs }) => {
	const handleClose = e => {
		clearForm();
		hide();
	};

	const saveSong = e => {
		e.preventDefault();
		createSong();
		handleClose();
		getAllSongs();
	};

	return (
		<Modal show={show}>
			<Modal.Header>
				<Modal.Title>Add Song</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<SongForm id='new-song-form' handleSubmit={saveSong} />
			</Modal.Body>
			<Modal.Footer>
				<Button form='new-song-form' type='submit'>
					Save Changes
				</Button>
				<Button color='error' onClick={handleClose}>
					Cancel
				</Button>
			</Modal.Footer>
		</Modal>
	);
};

// REDUX

import { connect } from 'react-redux';
import { hideCreateModal } from './redux.js';
import { clearForm, createSong } from '../SongForm/redux.js';
import { getAllSongs } from '../SongTable/redux.js';

const mapStateToProps = state => {
	return { show: state.createModal };
};

export default connect(mapStateToProps, {
	hide: hideCreateModal,
	clearForm,
	createSong,
	getAllSongs,
})(CreateModal);
