// Assignment Code
//create variable for putting fx together
let password = ""

// Write password to the #password input

function writePassword() {
    //create and excute generate pw fx and make sure to execute it
    //prompt blocks
    //decision string based on prompt blocks
    //math.random
    //loop based on length
    //let password = generatePassword();
    
    //create variable for capital letters
    let uppercase = ("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
    //create variable for lower case letters
    let lowercase = ("abcedefghijklmnopqrstuvwxyz");
    //creaate variable for numbers
    let numbers = ("1234567890");
    //creaate variable for symbols
    let symbols = ("!@#$%^&*()_+");
    let symbolsToUse = "";

    // create variable for password length
    

    //Prompt: "Would you like capital letters?"
    let upperInput  = confirm("Would you like capital letters?");
        if (upperInput === true) {
            symbolsToUse += uppercase
            console.log(symbolsToUse)
        }

    //Prompt: "WOuld you like lower case letters?"
    let lowerInput = confirm("Would you like lower case letters?");
         if (lowerInput === true) {
            symbolsToUse += lowercase
            console.log(symbolsToUse)
        }

    //Prompt: "Would you like numbers?"
    let numbersInput = confirm("Would you like numbers?");
    if(numbersInput === true) {
        symbolsToUse += numbers
            console.log(symbolsToUse)
   }

   //Prompt: "WOuld you like symbols?"
    let symbolsInput = confirm("Woud you like symbols?");
    if(symbolsInput === true) {
        symbolsToUse += symbols
        console.log(symbolsToUse)
   }

   let passLength = prompt("how long would you like you password to be? Choose a value between 8 and 128");

    if (8 <= passLength && passLength <= 128) {
        const allSymbols = symbolsToUse.split("")
        //for (let i = 0; i < passLength; i++)};
    }

    function genPassword() {
             [Math.floor(Math.random()) * passwordLength]; {
            append.charAt(symbolsToUse)
             };
}
        //make function to grab password and append it for X amount of times


   //create somewhere to store the characters

    let passwordText = document.querySelector("#password");


    passwordText.value = password;
}

//create variable for generate button
let generationBtn = document.querySelector("#generate");
// Add event listener to generate button
generationBtn.addEventListener("click", writePassword);


//PSEUDOCODE
//create Event Listener to create succession of prompts

//If true randomize capital letters with math.random()

//If true randomize lower case letters with math.random()

//If true randomize numbers with math.random

//if yes randomize symbols
//if no to all alert("You must choose at least one password criteria") and repeat cycle
//EventListener click and utilizes math.random to generate password
//event.preventDefault keeps page from reloading

//look up shuffle function