import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import About from './components/About';
import Add from './components/Add';
import Search from './components/Search';
import ViewAll from './components/ViewAll';
import Nav from './components/Nav';
import SignUp from './components/SignUp';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			displayed_form: '',
			token: '',
			email: 'test',
			username: '',

			login: localStorage.getItem('token') ? true : false,
		};
	}
	
	//needs token to be passed as header for each request
	handleLogin = (e, data) => {
		e.preventDefault();
		fetch('https://suresell.herokuapp.com/api/token/', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(data)
		})
			.then(res => res.json())
			.then(json => {
				localStorage.setItem('token', json.token);
				this.setState({
					login: true,
					displayed_form: '',
					username: json.user
					
				});
			});
	};

	handleSignup = (e, data) => {
		e.preventDefault();
		fetch('https://suresell.herokuapp.com/users/register', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(data)
		})
			.then(res => res.json())
			.then(json => {
				localStorage.setItem('token', json.token);
				this.setState({
					login: true,
					displayed_form: '',
					username: json.username
					
				});
			});
	};
	display_form = form => {
		this.setState({
			displayed_form: form
		});
	};

	handleLogout = () => {
		localStorage.removeItem('token');
		this.setState({ login: false, username: '' });
	};

	render() {
		let form;
		switch (this.state.displayed_form) {
			case 'login':
				form = <Login handleLogin={this.handleLogin} />;
				break;
			case 'signup':
				form = <SignUp handleSignup={this.handleSignup} />;
				break;
			default:
				form = null;
		}
		return (
			<div className="App">
				<Nav
					login={this.state.login}
					display_form={this.display_form}
					handleLogout={this.handleLogout}
				/>
				{form}
				
					<h3>
						{this.state.login
							? `Hello, ${this.state.username}`
							: 'Please Log In'}
					</h3>
			


				{/* <Route
					path='/'
					exact
					render={() => {
						return (
							<Login
								handleLogout={this.handleLogout}
								handleLogin={this.handleLogin}
								handleChangeEmail={this.handleChangeEmail}
								handleChangePassword={this.handleChangePassword}
								handleChangeUsername={this.handleChangeUsername}
							/>
						);
					}}
				/> */}
				<Route path='/about' component={About} />
				<Route path='/viewall' component={ViewAll} />
				<Route path='/add' component={Add} />
				<Route path='/search' component={Search} />
			</div>
		);
	}
}

export default App;
