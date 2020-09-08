import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';

function BaseNav() {
	return (
		<div className='BaseNav'>
			<Navbar
				className='justify-content-center'
				fixed='bottom'
				bg='dark'
				variant='dark'>
				<Nav activeKey='/home'>
					<Nav.Item>
						<Nav.Link href='/home'>Search</Nav.Link>
					</Nav.Item>
					<Nav.Item>
						<Nav.Link eventKey='link-1'>All</Nav.Link>
					</Nav.Item>
					<Nav.Item>
						<Nav.Link eventKey='link-2'>About</Nav.Link>
					</Nav.Item>
					<Nav.Item>
						<Nav.Link eventKey='disabled' disabled></Nav.Link>
					</Nav.Item>
				</Nav>
			</Navbar>
		</div>
	);
}

export default BaseNav;
