import { Nav } from "./components/Nav";
import React, { useState } from "react";

import "normalize.css";
import "./App.css";
import { Home } from "./components/home/Home";
import { Svgs } from "./components/home/Svgs";
import { Contact } from "./components/contact/Contact";

const App = () => {
	const [home, setHome] = useState(true);

	return (
		<>
			<Nav setHome={setHome} home={home} />
			<Svgs />
			{home === true ? <Home /> : <Contact /> }
		</>
	);
};

export default App;
