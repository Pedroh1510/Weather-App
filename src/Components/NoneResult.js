import React, { Component } from "react";

export default class components extends Component {
	constructor(props) {
		super();
	}
	render() {
		return (
			<div>
				<h2>{this.props.erro}</h2>
			</div>
		);
	}
}
