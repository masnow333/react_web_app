import { Nav } from "./components/Nav";
import React, { useState } from "react";

import "normalize.css";
import "./App.css";
import { Home } from "./components/Home";
import { Svgs } from "./components/Svgs";

const App = () => {
	const [home, setHome] = useState(true);

	return (
		<>
			<Nav setHome={setHome} home={home} />
			<Svgs />
			{home === true ? <Home /> : <h2>Contact Me</h2>}
		</>
	);
};

export default App;
