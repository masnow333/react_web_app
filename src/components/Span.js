import React, { useEffect, useState } from "react";

import "./Span.css";

export const Span = ({ value }) => {
	const [twinkle, setTwinkle] = useState(true);
	const [position, setPosition] = useState(0);
	const [word, setWord] = useState(value[position]);
	const [initial, setInitial] = useState(true);
	const [deleteWrite, setDeleteWrite] = useState(true);
	const [writeWord, setWriteWord] = useState();

	const timeOut = (ms) => {
		return new Promise((resolve) => {
			if (initial) {
				setTimeout(() => {
					setInitial(false);
					resolve();
				}, ms);
			} else {
				resolve();
			}
		});
	};

	const deleter = async () => {
		await timeOut(3000);
		if (deleteWrite) {
			await deleteWord();
			console.log("Delete");
		} else {
			await writeNewWord();
			console.log("New word");
		}
		console.log("Pasó por acá");
		wordChanger();
		setInitial(true);
	};

	const wordChanger = () => {
		if (position + 1 !== value.length) {
			setWord(value[position + 1]);
		} else {
			setWord(value[0]);
		}
		setDeleteWrite(false);
		console.log("WordChanger");
	};

	const deleteWord = () => {
		return new Promise((resolve) => {
			setTimeout(() => {
				if (word.length === 0) {
					setPosition((e) => {
						if (e === value.length - 1) {
							return 0;
						} else {
							return e + 1;
						}
					});
					resolve();
				} else {
					setWord((e) => e.slice(0, -1));
				}
			}, 300);
		});
	};

	let counter = 0;

	const writeNewWord = () => {
		return new Promise((resolve) => {
			counter = counter + 1;
			const newWord = "";
			console.log(counter);
			resolve();
		});
	};

	useEffect(() => {
		setInterval(() => {
			setTwinkle((e) => !e);
		}, 800);
	}, []);

	useEffect(() => {
		deleter();
	}, [word]);

	return (
		<span className={"writeWord" + (twinkle ? " twinkle" : "")}>
			{deleteWrite ? word : writeWord}
		</span>
	);
};
