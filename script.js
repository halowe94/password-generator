// Assignment Code
//create variable for generate button
let generationBtn = document.querySelector("#generate");
//create variable for capital letters
let uppercase = ("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
//create variable for lower case letters
let lowercase = ("abcedefghijklmnopqrstuvwxyz")
//creaate variable for numbers
let numbers = ("1234567890")
//creaate variable for symbols
let symbols = ("!@#$%^&*()_+")
//create variable for putting fx together
let password = ("uppercaseFx" + "lowercaseFx" + "numbersFx" + "symbolsFx")

// Write password to the #password input

function writePassword() {
    let password = generatePassword();
    let passwordText = document.querySelector("#passcode");


    passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


//PSEUDOCODE
//create Event Listener to create succession of prompts 
//Prompt: "Would you like capital letters?"
//If true randomize capital letters with math.random()
//Prompt: "WOuld you like lower case letters?"
//If true randomize lower case letters with math.random()
//Prompt: "Would you like numbers?"
//If true randomize numbers with math.random
//Prompt: "WOuld you like symbols?"
//if yes randomize symbols
//if no to all alert("You must choose at least one password criteria") and repeat cycle
//EventListener click and utilizes math.random to generate password
//event.preventDefault keeps page from reloading