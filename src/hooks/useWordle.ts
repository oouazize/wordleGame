import { useState } from "react";
import { MAX_ATTEMPTS, formatedGuess } from "../../types";

export default function useWordle(magicWord: string) {
	const [turn, setTurn] = useState(0); // tracking remaining attempts
	const [currentGuess, setCurrentGuess] = useState("");
	const [guesses, setGuesses] = useState<formatedGuess[][]>([...Array(MAX_ATTEMPTS)]); // storing user guesses and their results
	const [history, setHistory] = useState<string[]>([]); // each guess is a string
	const [isCorrect, setIsCorrect] = useState(false); // winning state

	// format a guess into an array of letter objects
	// e.g. [{key: 'a', color: 'yellow'}]
	const formatGuess = () => {
		const solutionArray: (string | null)[] = [...magicWord];
		const formattedGuess = [...currentGuess].map((letter, index) => {
			const position = solutionArray.indexOf(letter);
			// set the found letter to null in the solution array to handle duplicates
			solutionArray[position] = null;

			// check if the letter is in the correct position (green), misplaced (yellow), or not present (gray)
			return {
				key: letter,
				color:
					position === index ? "green" : position !== -1 ? "yellow" : "gray",
			};
		});

		return formattedGuess;
	};

	const addNewGuess = (formatedGuess: formatedGuess[]) => {
		// update the isCorrect state if the guess is correct
		if (currentGuess === magicWord) setIsCorrect(true);
		// add the new guess to the guesses state
		setGuesses((prev) => {
			let newGuesses = [...prev];
			newGuesses[turn] = formatedGuess;
			return newGuesses;
		});
		setHistory((prev) => [...prev, currentGuess]);
		setTurn((prev) => prev + 1);
		setCurrentGuess("");
	};

	// handle keyup event & track current guess
	// if user presses enter, add the new guess
	const handleKeyup = ({ key }) => {
		if (/^[a-zA-Z]$/.test(key) && currentGuess.length < magicWord.length)
			setCurrentGuess((prev) => prev + key);

		if (key === "Backspace") setCurrentGuess((prev) => prev.slice(0, -1));
		if (key === "Enter") {
			if (currentGuess.length !== magicWord.length) {
				console.log("Word must be " + magicWord.length + " chars long");
				return;
			}
			// no duplicate words
			if (history.includes(currentGuess)) {
				console.log("You already tried that word");
				return;
			}
			addNewGuess(formatGuess());
		}
	};

	return { turn, currentGuess, guesses, isCorrect, handleKeyup };
}
