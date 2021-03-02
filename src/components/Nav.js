import React from "react";

export const Nav = ({ setHome, home }) => {
	const change = (home) => {
		if (!home) {
			setHome(false);
		} else {
			setHome(true);
		}
	};

	return (
		<nav className="navbar">
			<ul>
				<li
					onClick={() => {
						change(true);
					}}
				>
					Home<span></span>
				</li>
				<li
					onClick={() => {
						change(false);
					}}
				>
					Contact Me<span></span>
				</li>
			</ul>
		</nav>
	);
};
