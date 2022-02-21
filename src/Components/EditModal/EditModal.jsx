import Button from '@mui/material/Button';
import React from 'react';
import { Modal } from 'react-bootstrap';
import DeleteIcon from '@mui/icons-material/Delete';
import SongForm from '../SongForm/SongForm.jsx';

const EditModal = ({ show, closeEditModal, updateSong, openDeleteModal }) => {
	const handleDeleteModal = e => {
		e.stopPropagation();
		openDeleteModal();
	};

	return (
		<Modal onClick={e => e.stopPropagation()} show={show}>
			<Modal.Header>
				<Modal.Title>EDIT SONG</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<SongForm id='edit-form' saveSong={updateSong} />
			</Modal.Body>
			<Modal.Footer>
				<Button color='error' onClick={handleDeleteModal}>
					<DeleteIcon />
				</Button>
				<Button form='edit-form' type='submit'>
					Save Changes
				</Button>
				<Button color='error' onClick={closeEditModal}>
					Cancel
				</Button>
			</Modal.Footer>
		</Modal>
	);
};

// REDUX

import { connect } from 'react-redux';
import { closeEditModal, updateSong } from './redux.js';
import { openDeleteModal } from '../DeleteModal/redux.js';

const mapStateToProps = state => {
	return { show: state.editModal };
};

export default connect(mapStateToProps, { closeEditModal, updateSong, openDeleteModal })(EditModal);
