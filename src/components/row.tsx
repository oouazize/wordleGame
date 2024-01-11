import React from "react";
import { formatedGuess } from "../../types";

export default function Row({
	length,
	currentGuess,
	guess,
}: {
	length: number;
	currentGuess?: string;
	guess?: formatedGuess[];
}) {
	const cells: JSX.Element[] = [];
	const letters = currentGuess?.split("");

	if (guess) {
		guess.map((letter, index) => {
			cells.push(
				<div
					key={index}
					className={`row-letter ${letter.color}`}
					style={{ animationDelay: `${index * 0.17}s` }}
				>
					{letter.key}
				</div>
			);
		});
	} else {
		for (let index = 0; index < length; index++)
			cells.push(
				<div
					key={index}
					className={`row-letter ${letters && letters[index] && "popIn"}`}
				>
					{letters && letters[index]}
				</div>
			);
	}

	return <div className="flex">{cells}</div>;
}
