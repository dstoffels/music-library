import React, { useState } from 'react';
import { FloatingLabel, Form } from 'react-bootstrap';

import './SearchBar.css';

const SearchBar = ({ criterion, setCriterion }) => {
	function handleCriterion(e) {
		setCriterion(e.target.value);
	}

	return (
		<>
			<FloatingLabel label='Search'>
				<Form.Control
					type='text'
					value={criterion}
					onChange={handleCriterion}
					placeholder='Search'
				/>
			</FloatingLabel>
		</>
	);
};

export default SearchBar;
