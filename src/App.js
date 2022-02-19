import React from 'react';
import { Container, Navbar } from 'react-bootstrap';

import SongTable from './Components/SongTable/SongLibrary.jsx';
import SearchBar from './Components/SearchBar/SearchBar.jsx';
import DeleteModal from './Components/DeleteModal/DeleteModal.jsx';
import EditModal from './Components/EditModal/EditModal.jsx';
import CreateModal from './Components/CreateModal/CreateModal.jsx';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {
	return (
		<>
			<DeleteModal />
			<EditModal />
			<CreateModal />

			<Navbar bg='light' sticky='top'>
				<Container fluid>
					<Navbar.Brand>slapSter</Navbar.Brand>
					<SearchBar />
				</Container>
			</Navbar>
			<Container>
				<SongTable />
			</Container>
		</>
	);
};

export default App;
