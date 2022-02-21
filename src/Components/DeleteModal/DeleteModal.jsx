import Button from '@mui/material/Button';
import React from 'react';
import { Modal } from 'react-bootstrap';

const DeleteModal = ({ show, closeDeleteModal, deleteSong }) => {
	const handleClose = e => {
		closeDeleteModal();
	};

	const handleDelete = e => {
		deleteSong();
	};

	return (
		<Modal show={show}>
			<Modal.Header>Are you sure you want to delete?</Modal.Header>
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
import { connect } from 'react-redux';
import { deleteSong, closeDeleteModal } from './redux.js';

const mapStateToProps = state => {
	return { show: state.deleteModal };
};

export default connect(mapStateToProps, {
	deleteSong,
	closeDeleteModal,
})(DeleteModal);
