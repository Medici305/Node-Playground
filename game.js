// Create variable holding the right answer.
let secretValue = Math.floor(1 + Math.random() * 10).toString();

// Create variable equal to array of numbers from 1 to 10.
let numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];

//Create testNumber object holding all the logic
module.exports = {
    testNumber: (input) => {
        if (input === 'quit') {
            process.stdout.write('Ok. Bye!\n')
            process.exit();
        }
        if (!numbers.includes(input)) {
            process.stdout.write('Choose a number from 1 through 10!\nIs the number ...')
        } else if (input === secretValue) {
            process.stdout.write('Woah you got it! Are you psychic? See you later!\n')
            process.exit();
        } else {
            process.stdout.write("Nope. Guess again!\nIs the number ... ");
        }
    }
}

/*
    Step 1: If user decides to quit before attempting to answer 
    have a solution for that and exit the process.
    Step 2: Write the logic for when the user types in a value
    that is not a number or withing the range of 1 - 10.
    Step 3: Write logic for when the user guesses the right number
    print out a message to say well done and exit process.
    Step 4: When the user did enter a number within the range of 1 - 10
    but is not equal to the secretValue write message notifying them to 
    try guess again.
*/