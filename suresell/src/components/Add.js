import React, { Component } from 'react';
import HeadNav from './HeadNav'
import BaseNav from './BaseNav'
import { Form, Row, Col, Button, InputGroup, FormControl } from 'react-bootstrap'
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
<br/>
                
                <Form inline className='AddFeature'>
                    <Form.Label htmlFor="inlineFormInputName2" srOnly>
                        Add Features
                    </Form.Label>
                    <Form.Control
                        className="mb-2 mr-sm-2"
                        id="inlineFormInputName2"
                        placeholder="Feature"
                    />
                    <Button type="submit" className="mb-2" id="AddButton" >
                        +
                    </Button>
                </Form>
                <br/>
                <Button className='AddCard' variant="primary" size="lg" block>
                    Make Card
  </Button>


                <BaseNav />
            </div>
        );
    }
}

export default Add;