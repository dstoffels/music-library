import Button from '@mui/material/Button';
import React from 'react';
import { Modal } from 'react-bootstrap';
import SongForm from '../SongForm/SongForm.jsx';

const CreateModal = ({ show, createSong, closeCreateModal }) => {
	function saveSong(song) {
		createSong(song);
	}

	return (
		<Modal show={show}>
			<Modal.Header>
				<Modal.Title>New Song</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<SongForm id='new-song-form' saveSong={saveSong} />
			</Modal.Body>
			<Modal.Footer>
				<Button form='new-song-form' type='submit'>
					Save Changes
				</Button>
				<Button color='error' onClick={closeCreateModal}>
					Cancel
				</Button>
			</Modal.Footer>
		</Modal>
	);
};

// REDUX
import { connect } from 'react-redux';
import { closeCreateModal, createSong } from './redux.js';

const mapStateToProps = state => {
	return { show: state.createModal };
};

export default connect(mapStateToProps, { createSong, closeCreateModal })(CreateModal);
