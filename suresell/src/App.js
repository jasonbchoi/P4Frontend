import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import About from './components/About';
import Add from './components/Add';
import Search from './components/Search';
import ViewAll from './components/ViewAll';

class App extends Component {
	render() {
		return (
			<div className='App'>
				{/* <Login/> */}
				{/* <About/> */}

				<Search />
				{/* <ViewAll/> */}
				<Route path='/add' component={Add} />
			</div>
		);
	}
}

export default App;
