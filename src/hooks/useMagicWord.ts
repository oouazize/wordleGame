import { generate } from "random-words";

export default function useMagicWord(length: number) {
	// generate the game word based on the length,
	// that the user choose in the settings
	const word = generate({
		exactly: 1,
		maxLength: length,
		minLength: length,
	})[0];
	return word;
}
