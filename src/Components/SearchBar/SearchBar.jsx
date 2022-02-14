import React, { useState } from 'react';
import { Container, FloatingLabel, Form } from 'react-bootstrap';

import './SearchBar.css';

const SearchBar = ({ criterion, setCriterion }) => {
	function handleCriterion(e) {
		setCriterion(e.target.value);
	}

	return (
		<div className='searchbar mt-2 mb-2'>
			<FloatingLabel label='Search'>
				<Form.Control
					type='text'
					value={criterion}
					onChange={handleCriterion}
					placeholder='Search'
				/>
			</FloatingLabel>
		</div>
	);
};

export default SearchBar;
