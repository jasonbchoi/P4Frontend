import React, { Component } from 'react';
import HeadNav from './HeadNav'
import BaseNav from './BaseNav'
import List from './List'
import { Form, Row, Col, Button } from 'react-bootstrap'
import './Add.css'

class Add extends Component {
    render() {
        return (
            <div className='Add'>
                <HeadNav />

                <Form className='AddField'>
                    <Row>
                        <Col>
                            <Form.Control placeholder="Year" />
                        </Col>
                        <Col>
                            <Form.Control placeholder="Make" />
                        </Col>
                    </Row>
                    <br />

                    <Row>
                        <Col>
                            <Form.Control placeholder="Model" />
                        </Col>
                        <Col>
                            <Form.Control placeholder="Trim" />
                        </Col>
                    </Row>
                </Form>
                <br />

                <List />
                <br />

                <Button className='AddCard' variant="primary" size="lg" block>
                    Make Card
                </Button>

                <BaseNav />
            </div>
        );
    }
}

export default Add;