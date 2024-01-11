// randomwords.cjs
import {generate} from "random-words";
import * as fs from 'node:fs';

function generateWords(length, count) {
	const wordsArray = [];

	for (let i = 0; i < count; i++) {
		const word = generate({
			exactly: 1,
			maxLength: length,
			minLength: length,
		})[0];
		wordsArray.push({ id: i + 1, word });
	}

	return wordsArray;
}

function saveToFile(length, count) {
	const words = generateWords(length, count);
	const fileName = `words_${length}.json`;

	fs.writeFileSync(fileName, JSON.stringify(words, null, 2));

	console.log(`${fileName} generated successfully!`);
}

const wordLengths = [4, 5, 6];
const wordsCount = 100;

wordLengths.forEach((length) => saveToFile(length, wordsCount));
