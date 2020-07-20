// Assignment Code
var generationBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var password = generatePassword();

    passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


//PSEUDOCODE
//create variable for generate button
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