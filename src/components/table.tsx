import React from "react";
import { formatedGuess } from "../../types";
import Row from "./row";

interface tableProps {
	wordLength: number;
	currentGuess: string;
	guesses: formatedGuess[][];
	turn: number;
}

export default function Table({
	wordLength,
	currentGuess,
	guesses,
	turn,
}: tableProps) {
	return (
		<div className="table flex-center flex-col">
			{guesses.map((guess, index) => {
				if (turn === index)
					return (
						<Row key={index} length={wordLength} currentGuess={currentGuess} />
					);
				return <Row key={index} length={wordLength} guess={guess} />;
			})}
		</div>
	);
}

// 5000
