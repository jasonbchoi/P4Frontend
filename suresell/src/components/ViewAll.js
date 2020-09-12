import React, { Component } from "react";
import HeadNav from "./HeadNav";
import BaseNav from "./BaseNav";
import { render } from 'react-dom';
import SwipeToDelete from 'react-swipe-to-delete-component';


import { Form, Button, Col } from "react-bootstrap";

class ViewAll extends Component {
	constructor(props) {
		super(props);
		this.state = {
			newSearch: '',
			features: [],
			car: null,
			allCars: null,
			token: localStorage.getItem('token') ? true : false,
		};
	}

	componentDidMount() {
		let url = `https://suresell.herokuapp.com/cars/`;
		if (this.state.token) {
			fetch(url, {
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
				},

			})
				.then((res) => res.json())
				.then((res) => {
					this.setState({ features: [...res] });
				});

		}
	}

	handleChange = (event) => {
		this.setState({ newSearch: event.target.value });
	};

	handleSubmit = (event) => {
		event.preventDefault();
		let url = `https://suresell.herokuapp.com/cars/`;
		let newArr = [];
		fetch(url)
			.then((res) => res.json())
			.then((res) => {
				this.setState({ features: [...res] });
				for (let i = 0; i < this.state.features.length; i++) {
					if (
						Object.values(this.state.features[i]).includes(
							this.state.newSearch
						)
					) {
						newArr.push(this.state.features[i]);
					}
				}
				this.setState({ features: newArr });
			});
	};

	// handleDelete = (event) => {
	// 	event.preventDefault();
	// 	let url = `https://suresell.herokuapp.com/cars/`;
	// 	if (this.state.token) {
	// 		fetch(url, {
	// 			method: 'DELETE',
	// 			headers: {
	// 				'Content-Type': 'application/json',
	// 			},
	// 		})
	// 	}
	// }


	render() {
		return (
			<div className="ViewAll">
				<HeadNav />
				<div className="searchWrapper">
					<Form className="ViewAllSearch" onSubmit={this.handleSubmit}>
						<Form.Row className="align-items-center">
							<Col sm={9.5} className="my-1">
								<Form.Control
									id="inlineFormInputName"
									placeholder="year, make, model, or trim"
									type="text"
									name="searchString"
									required
									onChange={this.handleChange}
								/>
							</Col>

							<Col xs="auto" className="my-1">
								<Button type="submit" className="mb-2" id="Button">
									Find
                				</Button>
							</Col>
						</Form.Row>
					</Form>
				</div>

				<div className='cardContainer'>
					{this.state.features.map(function (car, index) {
						return (
							//
							<div id={car} key={index}>
								{/* <SwipeToDelete key={car.id} car={car}> */}
								<div className="headWrapper">
									<div className="number">{car.year}</div>
									<div className="makeModel">
										{car.make} {car.model}
										<br />
										{car.trim}
									</div>
								</div>
								<div className="bodyWrapper">
									<div className="left">
										<ul>
											<li>A</li>
											<li>B</li>
											<li>C</li>
											<li>D</li>
											<li>E</li>
										</ul>
									</div>
									<div className="right">
										<ul>
											<li>A</li>
											<li>B</li>
											<li>C</li>
											<li>D</li>
											<li>E</li>
										</ul>
										<button
											className='editButton' onClick='editCard'>
											Edit
										</button>
										<button
											className='deleteButton' onClick='deleteCard'>
											Delete
										</button>
									</div>

								</div>
								{/* </SwipeToDelete> */}
							</div>

						);
					})}
				</div>
				<BaseNav />
			</div>
		);
	}
}

export default ViewAll;
