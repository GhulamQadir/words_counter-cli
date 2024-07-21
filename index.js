#! /usr/bin/env node
import inquirer from "inquirer";
const usersAnswers = await inquirer.prompt({
    name: "sentence",
    type: "input",
    message: "Enter the sentence of which you want to count words and characters",
});
function wordsCount() {
    let newWordsArr = [];
    let splittedWords = usersAnswers.sentence.trim().split(" ");
    for (let i = 0; i < splittedWords.length; i++) {
        if (splittedWords[i] !== "") {
            newWordsArr.push(splittedWords[i]);
        }
    }
    return newWordsArr.length;
}
let numOfWords = wordsCount();
console.log(`The total number of words in your sentence is ${numOfWords}`);
function charsCount() {
    let newCharsArr = [];
    let splittedChars = usersAnswers.sentence.trim().split("");
    for (let i = 0; i < splittedChars.length; i++) {
        if (splittedChars[i] !== " ") {
            newCharsArr.push(splittedChars[i]);
        }
    }
    return newCharsArr.length;
}
let numOfChars = charsCount();
console.log(`The total number of characters in your sentence is ${numOfChars}`);
