import TextField from '@mui/material/TextField';
import React from 'react';
import { connect } from 'react-redux';
import { setSearchFilter } from './redux.js';

import './SearchBar.css';

const SearchBar = props => {
	function handleCriterion(e) {
		props.setSearchFilter(e.target.value);
	}

	return (
		<div className='searchbar mt-2 mb-2'>
			<TextField
				fullWidth
				size='small'
				label='Search'
				value={props.searchFilter}
				onChange={handleCriterion}
			/>
		</div>
	);
};

const mapStateToProps = state => {
	return { searchFilter: state.searchFilter };
};

export default connect(mapStateToProps, { setSearchFilter })(SearchBar);
