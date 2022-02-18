import React, { useState } from 'react';
import { Container, Navbar } from 'react-bootstrap';

import SongTable from './Components/SongTable/SongLibrary.jsx';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import SearchBar from './Components/SearchBar/SearchBar.jsx';

const App = () => {
	return (
		<>
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
