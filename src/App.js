import React from "react";
import "./App.css";

import Weather from "./components/weather";

function App() {
	return (
		<div className="App">
			<Weather city="Sao_Paulo"></Weather>
		</div>
	);
}

export default App;
