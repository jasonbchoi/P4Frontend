import React from 'react';
import {Form, Button} from 'react-bootstrap';
import HeadNav from './HeadNav';
import BaseNav from './BaseNav';
import './Login.css'


function Login(props) {
    return (
        <div className='Login'>
            <HeadNav className='HeadNav' />
            
            <Form className='Form'>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            
            <BaseNav className='BaseNav' />
        </div>
    );
}

export default Login;