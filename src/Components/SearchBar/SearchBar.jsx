import React from 'react';
import { FloatingLabel, Form } from 'react-bootstrap';
import { connect } from 'react-redux';
import { setSearchFilter } from './redux.js';

import './SearchBar.css';

const SearchBar = props => {
	function handleCriterion(e) {
		props.setSearchFilter(e.target.value);
	}

	return (
		<div className='searchbar mt-2 mb-2'>
			<FloatingLabel label='Search'>
				<Form.Control
					type='text'
					value={props.searchFilter}
					onChange={handleCriterion}
					placeholder='Search'
				/>
			</FloatingLabel>
		</div>
	);
};

const mapStateToProps = state => {
	return { searchFilter: state.searchFilter };
};

export default connect(mapStateToProps, { setSearchFilter })(SearchBar);
