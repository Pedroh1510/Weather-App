import React, { Component } from "react";

export default class Result extends Component {
	constructor(props) {
		super();
	}
	render() {
		return (
			<div>
				<h2>Cidade: {this.props.city}</h2>
				<h2>Clima: {this.props.desciption}</h2>
				<h2>Temperatura Atual: {this.props.temp}</h2>
				<h2>Temperatura max: {this.props.temp_max}</h2>
				<h2>Temperatura min: {this.props.temp_min}</h2>
				<h2>Humidade: {this.props.humidity}</h2>
				<img src={this.props.icon} />
			</div>
		);
	}
}
