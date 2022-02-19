import Button from '@mui/material/Button';
import React from 'react';
import { Modal } from 'react-bootstrap';
import SongForm from '../SongForm/SongForm.jsx';

const EditModal = ({
	show,
	song,
	hide,
	clear,
	clearForm,
	updateSong,
	setSongForm,
	getAllSongs,
}) => {
	const handleClose = e => {
		clearForm();
		clear();
		hide();
	};

	const handleSubmit = e => {
		e.preventDefault();
		updateSong(song.id);
		handleClose();
		getAllSongs();
	};

	setSongForm({ ...song });

	return (
		<Modal onClick={e => e.stopPropagation()} show={show}>
			<Modal.Header>
				<Modal.Title>EDIT: {song.title}</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<SongForm id='edit-form' handleSubmit={handleSubmit} />
			</Modal.Body>
			<Modal.Footer>
				<Button form='edit-form' type='submit'>
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
import { hideEditModal } from './redux.js';
import { clearForm, setSongForm, updateSong } from '../SongForm/redux.js';
import { clearSelectedSong } from '../SongTable/SongRow/redux.js';
import { getAllSongs } from '../SongTable/redux.js';

const mapStateToProps = state => {
	return { show: state.editModal, song: state.selectedSong };
};

export default connect(mapStateToProps, {
	hide: hideEditModal,
	clear: clearSelectedSong,
	updateSong,
	clearForm,
	setSongForm,
	getAllSongs,
})(EditModal);
