import Button from '@mui/material/Button';
import React from 'react';
import { Modal } from 'react-bootstrap';
import SongForm from '../SongForm/SongForm.jsx';

const EditModal = ({ show, closeEditModal, updateSong }) => {
	return (
		<Modal onClick={e => e.stopPropagation()} show={show}>
			<Modal.Header>
				<Modal.Title>EDIT SONG</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<SongForm id='edit-form' saveSong={updateSong} />
			</Modal.Body>
			<Modal.Footer>
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

const mapStateToProps = state => {
	return { show: state.editModal };
};

export default connect(mapStateToProps, { closeEditModal, updateSong })(EditModal);
