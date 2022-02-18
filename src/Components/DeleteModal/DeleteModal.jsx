import Button from '@mui/material/Button';
import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';

const DeleteModal = ({ deleteModal, selectedSong, deleteSong, hideDeleteModal }) => {
	const handleClose = e => {
		e.stopPropagation();
		hideDeleteModal();
	};
	const handleDelete = e => {
		// e.stopPropagation()
		deleteSong(selectedSong.id);
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

const mapStateToProps = state => {
	return { deleteModal: state.deleteModal, selectedSong: state.selectedSong };
};

import { connect } from 'react-redux';
import { deleteSong, hideDeleteModal } from './redux.js';

export default connect(mapStateToProps, { deleteSong, hideDeleteModal })(DeleteModal);
