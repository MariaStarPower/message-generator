/* This is a random message generator.  It outputs inspirational messages based on 
a random number-generating algorithm. */


// Messages are stored in an array to be called upon later
let messages = ["You will have a good day", "You will fall in love", "You will get your dream job",
  "You will make a new friend", "You will receive a pleasant surprise", "You will accomplish something great",
  "You will realize a hidden potential"];


// Generates a random number between 1 and 7 to account for all of the elements in the array
let randomNum = Math.floor(Math.random() * 7 + 1);

// Returns an element from the array that corresponds to the number that was generated and displays the output
const generateMessage = (random) => {
  switch (random) {
    case 1: return messages[0];
    case 2: return messages[1];
    case 3: return messages[2];
    case 4: return messages[3];
    case 5: return messages[4];
    case 6: return messages[5];
    case 7: return messages[6];
  }
}

console.log(generateMessage(randomNum));