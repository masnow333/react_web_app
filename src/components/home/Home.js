import React , { useState, useEffect } from "react";

import { Word } from "./Word";

export const Home = ({position, setPosition, listOfValues, setSlide}) => {
	
	const [nextWord, setNextWord] = useState(listOfValues[position + 1])

	useEffect(() => {
		if (position === listOfValues.length - 1) {
			setNextWord(listOfValues[0])
		}else{
			setNextWord(listOfValues[position + 1])
		}
	}, [position])

	const maxLength = listOfValues.length -1;

	return (
		<div className="home">
			<h2>
				Hi, I'm Jonathan a <br />
				<Word value={listOfValues[position]} changeWord={setPosition} maxLength={maxLength} nextWord={nextWord} setSlide={setSlide}/>
			</h2>
		</div>
	);
};
