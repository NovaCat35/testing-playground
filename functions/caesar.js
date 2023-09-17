// Creating the hashmap for the alphabets
const alphabetMap = {};
const alphabet = "abcdefghijklmnopqrstuvwxyz";

for (let i = 0; i < alphabet.length; i++) {
	const letter = alphabet[i];
	alphabetMap[letter] = i;
}

const regex = /[A-Za-z]/;

// Caesar index decipher
export default function caesar(text) {
   let cipherText = "";

	for (let i = 0; i < text.length; i++) {
      const char = text[i];

		// Test for non-alphabet (punctuation)
		if (!regex.test(char)) {
			cipherText += char
			continue;
		}
		// Shifting letters up only
		const letterIndex = alphabetMap[char.toLowerCase()];
      const shiftedIndex = (letterIndex + 1) % alphabet.length; // this ensures a wrap-around when we hit 'z'

		for (const key in alphabetMap) {
			if (alphabetMap[key] === shiftedIndex) {
            cipherText += testCase(char, key);
            break;
			}
		}
	}
	return cipherText;
}

// IF originalLetter is capitalize, we return the capitalize letter, otherwise the letter is already lowercase.
function testCase(originalLetter, shiftedCipher) {
   if(originalLetter == originalLetter.toUpperCase()){
      return shiftedCipher.toUpperCase()
   } else {
      return shiftedCipher;
   }
}

/**
 * Loop through the text, for each letter....
 * Have the letters be search using a hashmap with the letter and corresponding index letter
 * Base on the index (value), return the index + 1 (account for the 'z')
 * Form a new decipher text base on the shifted index and RETURN
 */
