let isLocked = false;

// regular if/else
if (isLocked) {
  console.log('You will need a key to open the door.');
} else {
  console.log('You will not need a key to open the door.');
}

// Ternary Operator 
isLocked ? console.log('You will need a key to open the door.') : console.log('You will not need a key to open the door.');

// if/else
// let isCorrect = true;

// if (isCorrect) {
//   console.log('Correct!');
// } else {
//   console.log('Incorrect!');
// }

// Ternary
let isCorrect = true;

isCorrect ? console.log('Correct!') : console.log('Incorrect!')


// if/else
let favoritePhrase = 'Love That!';

if (favoritePhrase === 'Love That!') {
  console.log('I love that!');
} else {
  console.log("I don't love that!");
}

// Ternary
favoritePhrase === 'Love That!' ? console.log('I love that!') : console.log("I don't love that!");
