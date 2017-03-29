The program does nothing to non-alphabetical characters, since they do not contain consonants or vowels.
Example Input: 3
Example Output: 3


The program adds "ay" to single-letter words beginning with a vowel.
Example Input: i
Example Output: iay


The program adds "ay" to multi-letter words beginning with a vowel.
Example Input: apple
Example Output: appleay


The program adds "ay" to a string of words beginning with a vowel.
Example Input: apples are good
Example Output: appleay areay good


The program moves all consecutive consonants to the end, and adds ay, to a single character.
Example Input: t
Example Output: tay


The program moves all consecutive consonants to the end, and adds ay, to a word.
Example Input: monkey
Example Output: onkeymay


The program moves all consecutive consonants to the end, and adds ay, to each word in a sentence.
Example Input: monkeys are cute
Example Output: onkeysmay areay utecay


If the word starts with 'qu', move it to the end of the word.
Example Input: question
Example Output: estionqu


The program will NOT move the letters 'qu' to the end of the word if they are not the first characters.
Example Input: squeal
Example Output: uealsqay


The program will treat y as a consonant, only if it is the first character.
Example Input: Yogurt
Example Output: ogurtyay


The program will be case insensitive.
Example Input: ToTaLlY BrA
Example Output: otallytay rabay
