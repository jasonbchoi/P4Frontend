import React from 'react';
import PropTypes from 'prop-types';

function Nav(props) {
    const logged_out_nav = (
        <ul>
            <li onClick={() => props.display_form('login')}>login</li>
            <li onClick={() => props.display_form('signup')}>signup</li>
        </ul>
    );

    const login_nav = (
        <ul>
            <li onClick={props.handleLogout}>logout</li>
        </ul>
    );
    return <div>{props.login ? login_nav : logged_out_nav}</div>;
}

export default Nav;

Nav.propTypes = {
    login: PropTypes.bool.isRequired,
    display_form: PropTypes.func.isRequired,
    handleLogout: PropTypes.func.isRequired
};