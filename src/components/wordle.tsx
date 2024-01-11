import React from "react";
import useWordle from "../hooks/useWordle";
import { useEffect } from "react";
import Table from "./table";

export default function Wordle({ magicWord }: { magicWord: string }) {
	const { currentGuess, guesses, handleKeyup, isCorrect, turn } =
		useWordle(magicWord);

	useEffect(() => {
		window.addEventListener("keyup", handleKeyup);

		return () => window.removeEventListener("keyup", handleKeyup);
	}, [handleKeyup]);

	if (isCorrect) {
	} else if (turn === 6) {
	}
	return (
		<Table
			wordLength={magicWord.length}
			currentGuess={currentGuess}
			guesses={guesses}
			turn={turn}
		/>
	);
}
