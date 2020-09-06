import React, { Component } from 'react';
import {Card} from 'react-bootstrap'
import './InfoCard.css'

class InfoCard extends Component {
    

    render() {
        return (
            <div className='InfoCard'>
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>Make, Model, Trim</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Year</Card.Subtitle>
                        <Card.Text>
                            - feature - feature - feature <br />- feature - feature - feature
    </Card.Text>

                    </Card.Body>
                </Card>
            </div>
        );
    }
}

export default InfoCard;