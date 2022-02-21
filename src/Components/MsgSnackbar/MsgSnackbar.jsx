import React from 'react';

import Snackbar from '@mui/material/Snackbar';

const MsgSnackbar = ({ show, content }) => {
	return (
		<Snackbar
			open={show}
			message={content.msg}
			action={content.actionComponent}
			autoHideDuration={6000}
		/>
	);
};

// REDUX

import { connect } from 'react-redux';

const mapStateToProps = state => {
	return { show: state.displaySnackbar, content: state.snackbarMessage };
};

export default connect(mapStateToProps, {})(MsgSnackbar);
