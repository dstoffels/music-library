import Button from '@mui/material/Button';
import React from 'react';
import { Modal } from 'react-bootstrap';

const DeleteModal = ({
	deleteModal,
	selectedSong,
	deleteSong,
	hideDeleteModal,
	clear,
	getAllSongs,
}) => {
	const handleClose = e => {
		e.stopPropagation();
		clear();
		hideDeleteModal();
	};

	const handleDelete = e => {
		e.preventDefault();
		deleteSong(selectedSong.id);
		getAllSongs();
	};

	return (
		<Modal show={deleteModal}>
			<Modal.Header>Are you sure you want to delete {selectedSong.title}?</Modal.Header>
			<Modal.Footer>
				<Button onClick={handleDelete}>Yes</Button>
				<Button color='error' onClick={handleClose}>
					No
				</Button>
			</Modal.Footer>
		</Modal>
	);
};

// REDUX

const mapStateToProps = state => {
	return { deleteModal: state.deleteModal, selectedSong: state.selectedSong };
};

import { connect } from 'react-redux';
import { deleteSong, hideDeleteModal } from './redux.js';
import { clearSelectedSong } from '../SongTable/SongRow/redux.js';
import { getAllSongs } from '../SongTable/redux.js';

export default connect(mapStateToProps, {
	deleteSong,
	hideDeleteModal,
	clear: clearSelectedSong,
	getAllSongs,
})(DeleteModal);
