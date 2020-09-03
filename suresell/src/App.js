import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import About from './components/About';
import HeadNav from './components/HeadNav';
import BaseNav from './components/BaseNav';
import './App.css';
import Form from 'react-bootstrap/Form'

class App extends Component {
  render() {
    return (
      <div className='App'>
        <HeadNav className='HeadNav'/>

        <Form className='Form'>
          <Form.Group controlId="formGroupEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
          <Form.Group controlId="formGroupPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
        </Form>
        
        <BaseNav className='BaseNav'/>
        
      </div>
    );
  }
}

export default App; 