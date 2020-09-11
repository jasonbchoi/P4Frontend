
import React from 'react';
import PropTypes from 'prop-types';

class SignUp extends React.Component {
    state = {
        username: '',
        password: ''
    };

    handleChange = event => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState(prevstate => {
            const newState = { ...prevstate };
            newState[name] = value;
            return newState;
        });
    };

    render() {
        return (
            <form onSubmit={event => this.props.handleSignup(event, this.state)}>
                <h4>Sign Up</h4>
                <label htmlFor="username">Username</label>
                <input
                    type="text"
                    name="username"
                    value={this.state.username}
                    onChange={this.handleChange}
                />
                <label htmlFor="password">Password</label>
                <input
                    type="text"
                    name="password"
                    value={this.state.password}
                    onChange={this.handleChange}
                />
                <input type="submit" />
            </form>
        );
    }
}

export default SignUp;

SignUp.propTypes = {
    handleSignup: PropTypes.func.isRequired
};
