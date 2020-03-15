import React, { Component } from "react";

export default class Weather extends Component {
	constructor(props) {
		super();
		this.state = {
			city: ""
		};
		this.enter = this.enter.bind(this);
	}
	enter() {
		console.log(this.state.city);
	}
	render() {
		return (
			<div>
				<h2>Previsão do tempo</h2>
				<input
					type="text"
					onChange={(event) => {
						this.setState({ city: event.target.value });
					}}
				/>
				<input type="button" value="Enter" onClick={this.enter} />
			</div>
		);
	}
}
