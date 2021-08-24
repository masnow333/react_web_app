import { Nav } from "./components/Nav";
import React, { useState } from "react";

import "normalize.css";
import "./App.css";
import { Home } from "./components/home/Home";
import { Svgs } from "./components/home/Svgs";
import { Contact } from "./components/contact/Contact";
import { Background } from "./components/Background";

const App = () => {
	const [home, setHome] = useState(true);

	const [position, setPosition] = useState(0);

	const [slide, setSlide] = useState(false)

	const listOfValues = [
		"Web developer",
		"Web designer",
		"Tea lover",
		"Book lover",
		"Student",
		"Player",
	];

	return (
		<>
			<Background position={position} slide={slide} />
			<div className="wrapper">
				<Nav setHome={setHome} home={home} />
				<Svgs />
				{home === true ? <Home position={position} setPosition={setPosition} listOfValues={listOfValues} setSlide={setSlide} /> : <Contact /> }
			</div>
		</>
	);
};

export default App;
