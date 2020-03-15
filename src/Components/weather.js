import React, { Component } from "react";

import "./weather.css";
import FullResult from "./Result";
import NoneResult from "./NoneResult";

export default class Weather extends Component {
	constructor(props) {
		super();
		this.state = {
			search: localStorage.getItem("@weatherApp/city"),
			validKey: false,
			temp: 0,
			temp_min: 0,
			temp_max: 0,
			city: "",
			humidity: 0,
			description: "",
			icon: "",
			isVisorActive: false,
			erro: ""
		};
		this.consulta = this.consulta.bind(this);
		this.handleKeyPress = this.handleKeyPress.bind(this);
	}
	handleKeyPress = (event) => {
		if (event.key === "Enter") {
			this.consulta();
		}
	};

	ajustadoEncodeURIComponent(str) {
		return encodeURIComponent(str).replace(/[!'()*]/g, function(c) {
			return "%" + c.charCodeAt(0).toString(16);
		});
	}

	consulta() {
		const city = this.ajustadoEncodeURIComponent(this.state.search);
		const apikey = "e8aec5dd17aedfa681482bd986fbead9";
		const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric&lang=pt_br`;
		fetch(url)
			.then((res) => res.json())
			.then((json) => {
				const { description } = json.weather[0];
				const icon = `http://openweathermap.org/img/w/${json.weather[0].icon}.png`;
				const city = json.name;
				const { temp, temp_min, temp_max, humidity } = json.main;
				this.setState({
					city,
					description,
					temp,
					temp_max,
					temp_min,
					humidity,
					icon,
					isVisorActive: true,
					erro: ""
				});
				localStorage.setItem("@weatherApp/city", city);
			})
			.catch(() => {
				this.setState({
					erro: "Por favor pesquise uma cidade valida",
					isVisorActive: false
				});
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
					value={this.state.search}
				/>
				<input type="button" value="Enter" onClickCapture={this.consulta} />
				{this.state.isVisorActive ? (
					<FullResult
						city={this.state.city}
						description={this.state.description}
						temp={this.state.temp}
						temp_max={this.state.temp_max}
						temp_min={this.state.temp_min}
						humidity={this.state.humidity}
						icon={this.state.icon}
					/>
				) : (
					<NoneResult erro={this.state.erro} />
				)}
			</div>
		);
	}
}
