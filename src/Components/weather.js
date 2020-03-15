import React, { Component } from "react";

export default class Weather extends Component {
	constructor(props) {
		super();
		this.state = {
			search: "",
			validKey: false,
			temp: 0,
			city: "",
			humidity: 0,
			description: ""
		};
		this.consulta = this.consulta.bind(this);
		this.handleKeyPress = this.handleKeyPress.bind(this);
	}
	handleKeyPress = (event) => {
		if (event.key === "Enter") {
			this.consulta();
		}
	};
	consulta() {
		const city = `${this.state.search}`;
		const url = `https://api.hgbrasil.com/weather?format=json-cors&key=e6b494d3&city_name=${city}`;
		fetch(url)
			.then((v) => v.json())
			.then((json) => {
				const validKey = json.valid_key;
				const content = json.results;
				const { humidity, temp, city, description } = content;
				this.setState({ temp, city, humidity, description });
			});
	}
	render() {
		return (
			<div>
				<h2>Previsão do tempo</h2>
				<p>Exemplo: São Paulo</p>
				<input
					type="text"
					onKeyPress={this.handleKeyPress}
					onChange={(event) => {
						this.setState({ search: event.target.value });
					}}
				/>
				<input type="button" value="Enter" onClickCapture={this.consulta} />
				<h2>Cidade encontrada: {this.state.city}</h2>
				<h2>Confição clima {this.state.description}</h2>
				<h2>Temperatura: {this.state.temp}</h2>
				<h2>Humidade: {this.state.humidity}</h2>
			</div>
		);
	}
}
