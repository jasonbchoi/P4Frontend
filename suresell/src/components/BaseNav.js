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
						<Nav.Link className='searchIcon'href='/search'>Search</Nav.Link>
					</Nav.Item>
					<Nav.Item>
						<Nav.Link className='allIcon' href='/viewall'>All</Nav.Link>
					</Nav.Item>
					<Nav.Item>
						<Nav.Link className='aboutIcon' href='/about'>About</Nav.Link>
					</Nav.Item>
					
				</Nav>
			</Navbar>
		</div>
	);
}

export default BaseNav;
