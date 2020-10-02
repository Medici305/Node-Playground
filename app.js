// Import the testNumber object from the game.js file.
let {testNumber} = require('./game');

//Write popup message indicating how to play the game and steps to take.
process.stdout.write("I'm thinking of a number from 1 through 10. What do you think it is? \n(Write \"quit\" to give up.)\n\nIs the number ... ");

// Create playGame function that stores what the user input is and logs it into the testNumber function parameter.
let playGame = (userInput) => {
    let input = userInput.toString().trim();
    testNumber(input);
};

// Initiate the game with the on() method that use listens out for 'data' event and executes the playGame callback function.
process.stdin.on('data', playGame);
