import React , { useState, useEffect } from "react";

//import { Span } from "./Span";
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

	const svgs = ["laptop", "pencil", "tea", "book", "glases", "mando"];

	const maxLength = listOfValues.length -1;

	return (
		<>
			<h2>
				Hi, I'm Jonathan a <br />
				<Word value={listOfValues[position]} changeWord={setPosition} maxLength={maxLength} nextWord={nextWord} setSlide={setSlide}/>
			</h2>
			<svg className="homeImage" viewBox="0 0 512 512">
				<use href={"#" + svgs[position]} />
			</svg>
		</>
	);
};
