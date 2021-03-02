import React, { useEffect, useState } from "react";

export const Home = () => {
	const things = [
		"Web developer",
		"Web designer",
		"Tea lover",
		"Book lover",
		"Student",
		"Player",
	];

	const svgs = ["laptop", "pencil", "tea", "book", "glases", "mando"];

	const [listThings, setListThings] = useState(0);

	useEffect(() => {
		setTimeout(() => {
			if (listThings !== things.length - 1) {
				setListThings(listThings + 1);
			} else {
				setListThings(0);
			}
			console.log(things[listThings], svgs[listThings]);
		}, 3000);
	});

	return (
		<>
			<h2>
				Hi, I'm Jonathan a <br />
				<span>{things[listThings]}</span>
			</h2>
			<svg className="homeImage" viewBox="0 0 512 512">
				<use href={"#" + svgs[listThings]} />
			</svg>
		</>
	);
};
