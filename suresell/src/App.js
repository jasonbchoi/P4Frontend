import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import About from './components/About';
import Add from './components/Add';
import Search from './components/Search'



class App extends Component {
  render() {
    return (
      <div className='App'>
        {/* <Login/> */}
        {/* <About/> */}
        {/* <Add/> */}
        <Search/>
      </div>
    );
  }
}

export default App; 