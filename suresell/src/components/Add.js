import React, { Component } from 'react';
import HeadNav from './HeadNav'
import BaseNav from './BaseNav'
import List from './List'
import { Form, Row, Col, Button } from 'react-bootstrap'
import './Add.css'

class Add extends Component {
    constructor(props) {
        super(props);
        this.state = {
            year: '',
            make: '',
            model: '',
            trim:''
        };
    }

    handleChange = (event) =>
        this.setState({
            year: event.target.value,
            make: event.target.value,
            model: event.target.value,
            trim: event.target.value,
            
        });

    render() {
        return (
            <div className='Add'>
                <HeadNav />

                <Form className='AddField'>
                    <Row>
                        <Col>
                            <Form.Control
                               
                                placeholder='Year'
                                type='text'
                                name='searchString'
                                required
                                onChange={this.handleChange}
                                value={this.state.year}
                                />
                        </Col>
                        <Col>
                            <Form.Control 
                                placeholder='Make'
                                type='text'
                                name='searchString'
                                required
                                onChange={this.handleChange}
                                value={this.state.make} /> 
                        </Col>
                    </Row>
                    <br />

                    <Row>
                        <Col>
                            <Form.Control 
                                placeholder='Model'
                                type='text'
                                name='searchString'
                                required
                                onChange={this.handleChange}
                                value={this.state.model} />
                        </Col>
                        <Col>
                            <Form.Control 
                                placeholder='Trim'
                                type='text'
                                name='searchString'
                                required
                                onChange={this.handleChange}
                                value={this.state.trim} />
                        </Col>
                    </Row>
                
                </Form>
                <br />

                <List />
                <br />

                <Button type='submit' className='AddCard' variant="primary" size="lg" block>
                    Make Card
                </Button>

                <BaseNav />
            </div>
        );
    }
}

export default Add;