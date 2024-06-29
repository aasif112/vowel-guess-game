#! /usr/bin/env node

import inquirer from "inquirer";

const randomNum = Math.trunc(Math.random()*5 +1)
var vowel = ""
if(randomNum === 1) {
    var vowel = "a"
}
else if (randomNum === 2) {
    var vowel = "e"
}
else if (randomNum === 3) {
    var vowel = "i"
}
else if (randomNum === 4) {
    var vowel = "o"
}
else if (randomNum === 5) {
    var vowel = "u"
}

console.log(`A random vowel letter has been Generated: `)

const asnwer = await inquirer.prompt([
    {
        message:'Guess and Enter a vowel to check ',
        type:"list",
        name:"userGuess",
        choices:["a", "e", "i", "o", "u"]
    }
])

// console.log(asnwer.userGuess)

if(vowel === asnwer.userGuess) {
    console.log(`${asnwer.userGuess} is RIGTH GUESS!`)
}
else {
    console.log(`${asnwer.userGuess} is WRONG GUESS!`)
}
