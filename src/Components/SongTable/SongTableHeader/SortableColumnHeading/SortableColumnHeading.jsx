import React from 'react';

import TableCell from '@mui/material/TableCell';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

import './SortableColumnHeading.css';

const SortableColumnHeading = ({ column, sorting, changeSortingColumn, toggleAscendingOrder }) => {
	const handleClick = e => {
		sorting.column === column ? toggleAscendingOrder() : changeSortingColumn(column);
	};

	const sortIcon =
		sorting.column === column ? (
			sorting.ascending ? (
				<ArrowDropDownIcon />
			) : (
				<ArrowDropUpIcon />
			)
		) : (
			<></>
		);

	return (
		<TableCell className='table-heading' onClick={handleClick}>
			{split_and_capitalize(column)}
			{sortIcon}
		</TableCell>
	);
};

// REDUX

import { connect } from 'react-redux';
import { changeSortingColumn, toggleAscendingOrder } from './redux.js';

const mapStateToProps = state => {
	return { sorting: state.sorting };
};

export default connect(mapStateToProps, { changeSortingColumn, toggleAscendingOrder })(
	SortableColumnHeading,
);

const split_and_capitalize = word => {
	return word
		.split('_')
		.map(word => word.charAt(0).toUpperCase() + word.slice(1))
		.join(' ');
};
