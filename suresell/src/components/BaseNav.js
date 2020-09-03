import React from 'react';
import {Nav,Navbar} from 'react-bootstrap';

function BaseNav() {
    return (
        <Navbar className="justify-content-center" sticky="bottom">
        <Nav fill activeKey="/home">
            <Nav.Item>
                <Nav.Link href="/home">Search</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link-1">All</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link-2">Link</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="disabled" disabled>
                    Disabled
      </Nav.Link>
            </Nav.Item>
            </Nav>
        </Navbar>
    );
}

export default BaseNav;