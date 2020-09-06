import React, { Component } from 'react';
import HeadNav from './HeadNav'
import BaseNav from './BaseNav'
import Search from './Search';
import InfoCard from './InfoCard';
import './ViewAll.css'
import { Form, Button, Col } from 'react-bootstrap';

class ViewAll extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newSearch:'',
            featureList:[],
        };
    }

    handleChange = (event) => {
        this.setState({ newSearch: event.target.value });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        
    };

    render() {
        return (
            <div className='ViewAll'>
                <HeadNav />


                <Form className="ViewAllSearch" onSubmit={this.handleSubmit}>
                    <Form.Row className="align-items-center">
                        <Col sm={5} className="my-1">
                            
                            <Form.Control 
                            id="inlineFormInputName" 
                            placeholder="year, make, model, or trim"
                            type='text'
                            name='searchString'
                            required
                            onChange={this.handleChange}
                            value = {this.state.year} />
                        </Col>
                        <Col xs="auto" className="my-1">
                            <Button type='submit' className='mb-2' id='AddButton'>
                                Find
					</Button>

                        </Col>
                    </Form.Row>
                </Form>


                <InfoCard className="ViewInfoCard" />
                <BaseNav />

            </div>
        );
    }
}

export default ViewAll;