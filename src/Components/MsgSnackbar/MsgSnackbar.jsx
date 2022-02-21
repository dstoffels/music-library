import React from 'react';

import Snackbar from '@mui/material/Snackbar';

const MsgSnackbar = ({ show, content, closeSnackbar }) => {
	return (
		<Snackbar
			open={show}
			message={content.msg}
			action={content.actionComponent}
			autoHideDuration={10000}
			onClose={closeSnackbar}
		/>
	);
};

// REDUX

import { connect } from 'react-redux';
import { closeSnackbar } from './redux.js';

const mapStateToProps = state => {
	return { show: state.displaySnackbar, content: state.snackbarMessage };
};

export default connect(mapStateToProps, { closeSnackbar })(MsgSnackbar);
