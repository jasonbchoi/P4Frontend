import React from 'react';
import { Accordion, Card, Jumbotron, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function About() {
    const members = [
        {
            name: 'Jason Choi',
            githubLink: 'https://github.com/jasonbchoi',
            linkedInLink: 'https://www.linkedin.com/in/jasonbchoi',
        },
        {
            name: 'Alex Powers',
            githubLink: '',
            linkedInLink: '',
        }
    ]
    return (

        <Jumbotron className='about'>
            <h1>MEET OUR TEAM</h1>
            <p className='body'>
                Welcome friend! If you're looking to improve quantity and quality of your sales, then look no further! SureSell is a quick and easy way to reference any of your inventories' key selling features by creating visual cards you can quickly sort through.
                SureSell will help you make the impression that you are a product expert!
			</p>
        </Jumbotron>

    );
}

export default About;