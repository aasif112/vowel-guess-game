#! /usr/bin/env node
import inquirer from "inquirer";
const randomNum = Math.trunc(Math.random() * 5 + 1);
var vowel = "";
if (randomNum === 1) {
    var vowel = "a";
}
else if (randomNum === 2) {
    var vowel = "e";
}
else if (randomNum === 3) {
    var vowel = "i";
}
else if (randomNum === 4) {
    var vowel = "o";
}
else if (randomNum === 5) {
    var vowel = "u";
}
// console.log(vowel)
const asnwer = await inquirer.prompt([
    {
        message: 'Guess and Select a vowel to check ',
        type: "rawlist",
        name: "userGuess",
        choices: ["a", "e", "i", "o", "u"]
    }
]);
// console.log(asnwer.userGuess)
if (vowel === asnwer.userGuess) {
    console.log("RIGTH GUESS!");
}
else {
    console.log("WRONG GUESS!");
}
