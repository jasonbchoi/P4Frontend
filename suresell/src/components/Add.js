import React, { Component } from 'react';
import HeadNav from './HeadNav'
import BaseNav from './BaseNav'
import { Form, Row, Col } from 'react-bootstrap'
import './Add.css'

class Add extends Component {
    render() {
        return (
            <div className='Add'>
                <HeadNav />

                <Form className='AddForm'>
                    <Row>
                        <Col>
                            <Form.Control placeholder="Year" />
                        </Col>
                        <Col>
                            <Form.Control placeholder="Make" />
                        </Col>
                    </Row><br />
                    <Row>
                        <Col>
                            <Form.Control placeholder="Model" />
                        </Col>
                        <Col>
                            <Form.Control placeholder="Trim" />
                        </Col>
                    </Row>
                </Form>

                <Form className='AddForm'>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Features:</Form.Label>
                        <Form.Control type="email" placeholder="Feature" />
                        <Form.Text className="text-muted">
                            **Abbreviate features
                        </Form.Text>
                    </Form.Group>

                    
                    
                </Form>


                <BaseNav />
            </div>
        );
    }
}

export default Add;