import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';

function HeadNav() {
    return (
        <Navbar className='justify-content-end' fixed='top' bg='dark' variant='dark'>
            <Nav activeKey='/home'>
                <Nav.Item>
                    <Nav.Link href='/home'>Search</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey='link-1'>All</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey='link-2'>+</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey='disabled' disabled>
                        Disabled
                    </Nav.Link>
                </Nav.Item>
            </Nav>
        </Navbar>
    );
}

export default HeadNav;