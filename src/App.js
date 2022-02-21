import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';

import SongTable from './Components/SongTable/SongLibrary.jsx';
import SearchBar from './Components/SearchBar/SearchBar.jsx';
import DeleteModal from './Components/DeleteModal/DeleteModal.jsx';
import EditModal from './Components/EditModal/EditModal.jsx';
import CreateModal from './Components/CreateModal/CreateModal.jsx';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = ({ openCreateModal }) => {
	return (
		<>
			<DeleteModal />
			<EditModal />
			<CreateModal />

			<Navbar bg='light' sticky='top'>
				<Container>
					<Navbar.Brand>slapSter</Navbar.Brand>
					<SearchBar />
					<Button onClick={openCreateModal} variant='outlined'>
						<AddIcon />
					</Button>
				</Container>
			</Navbar>
			<Container>
				<SongTable />
			</Container>
		</>
	);
};

// REDUX
import { connect } from 'react-redux';
import { openCreateModal } from './Components/CreateModal/redux.js';

export default connect(null, { openCreateModal })(App);
