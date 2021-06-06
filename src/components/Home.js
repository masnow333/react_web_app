import React/* , { useState } */ from "react";

import { Span } from "./Span";

export const Home = () => {
	// const [listThings, setListThings] = useState(0);

	const listOfValues = [
		"Web developer",
		"Web designer",
		"Tea lover",
		"Book lover",
		"Student",
		"Player",
	];

	const svgs = ["laptop", "pencil", "tea", "book", "glases", "mando"];

	/* useEffect(() => {
		let counter = 0;
		const svgChange = setInterval(() => {
			if (counter === listOfValues.length - 1) {
				setListThings(0);
				counter = 0;
			} else {
				setListThings((e) => e + 1);
				counter++;
			}
		}, 3000);
		return () => clearInterval(svgChange);
	}, []); */

	return (
		<>
			<h2>
				Hi, I'm Jonathan a <br />
				<Span value={listOfValues}/>
			</h2>
			<svg className="homeImage" viewBox="0 0 512 512">
				<use href={"#" + svgs[0]} />
			</svg>
		</>
	);
};
