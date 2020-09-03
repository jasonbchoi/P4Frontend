import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import About from './components/About';
import HeadNav from './components/HeadNav';
import BaseNav from './components/BaseNav';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <HeadNav className='HeadNav'/>
        <BaseNav className='BaseNav'/>
        
      </div>
    );
  }
}

export default App; 