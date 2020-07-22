// Assignment Code
//create variable for putting fx together
let password = ("uppercaseFx" + "lowercaseFx" + "numbersFx" + "symbolsFx")

// Write password to the #password input

function writePassword() {
    //create and excute generate pw fx and make sure to execute it
    //prompt blocks
    //decision string based on prompt blocks
    //math.random
    //loop based on length
    let password = generatePassword();
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

    // create variable for password length
    let passLength = function passlength() {
    
        let i = prompt("how long would you like you password to be? Choose a value between 8 and 128");

        if (8 <= i <= 128) {
            console.log(i);
        }
    }

    //Prompt: "Would you like capital letters?"
    uppercase  = confrim("Would you like capital letters?");
        if (uppercase === true) {
            console.log("Math.floor(Math.random) * [i]")
        }

    //Prompt: "WOuld you like lower case letters?"
    let lowercase = prompt("Would you like lower case letters?");
         if (lowercase === true) {
             console.log("Math.floor(Math.random) * [i]")
        }

    //Prompt: "Would you like numbers?"
    let numbers = prompt("Would you like numbers?");
    (numbers === true) {
        console.log("Math.floor(Math.random) * [i]")
   }

   //Prompt: "WOuld you like symbols?"
    let symbols = prompt("Woud you like symbols?");
    (symbols === true) {
        console.log("Math.floor(Math.random) * [i]")
   }

   //create somewhere to store the characters

    let passwordText = document.querySelector("#passcode");


    passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


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