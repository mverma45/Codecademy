let raceNumber = Math.floor(Math.random() * 1000);
let earlyReg = false;
let runnerAge = 25;

if (runnerAge === 18 && earlyReg === true) {
  raceNumber += 1000;
  console.log('')
} else if (runnerAge > 18 && earlyReg === false) {
  console.log(`Your race is at a 11:00 AM.  Your race number is ${raceNumber}.`);
} else if (runnerAge < 18){
  console.log(`Your race is at 12:30 PM. Your race number is ${raceNumber}.`);
} else if (runnerAge == 18){
  console.log('Pleae see the registration desk for more information.')
}


//  assigning a default value
function makeShoppingList(item1 = 'milk', item2 = 'bread', item3 = 'eggs'){
    console.log(`Remember to buy ${item1}`);
    console.log(`Remember to buy ${item2}`);
    console.log(`Remember to buy ${item3}`);
  }

//return function
  function monitorCount(rows, columns) {
    return rows * columns
    };
    const numOfMonitors = monitorCount(5, 4) 
    console.log(numOfMonitors);

    // cost of monitors, helper functions multiple functions
    function monitorCount(rows, columns) {
        return rows * columns;
      }
      function costOfMonitors(rows, columns){
        return monitorCount(rows, columns) * 200;
      }
      const totalCost = costOfMonitors(5, 4)
      
      //Plants need water
      console.log(totalCost);
      const plantNeedsWater = function (day, plantNeedsWater){
        if (day === 'Wednesday'){
          return true;
        } else {
          return false;
        }
        console.log(plantNeedsWater('Tuesday'))
        }

        //same code as above but just an arrow function.
        const plantNeedsWater2 = (day) => {
          if (day === 'Wednesday') {
            return true;
          } else {
            return false;
          }
        console.log(plantNeedsWater2('Wednesday'))
        };
        
        //same code as above but it's a implicit return line only has one parameter and it's turned into a teranary operator.
        
        const plantNeedsWater3 = day => day === 'Wednesday' ? true : false;

        // Rock, Paper, Scissors Auto win with Bomb

        const getUserChoice = userInput => {
          userInput = userInput.toLowerCase();
          
          if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb'){
            return userInput;
          } else {
            console.log('Error!');
        } 
      };
          const getComputerChoice = () => {
          const randomNumber = Math.floor(Math.random() * 3);
          switch (randomNumber){
            case 0:
              return 'rock';
            case 1:
              return 'paper';
            case 2:
              return 'scissors';
            }
          }
          const determineWinner = (userChoice, computerChoice) => {
          if (userChoice === computerChoice) {
            return 'the game was a tie';
          }
        
          if (userChoice === 'rock') {
            if (computerChoice === 'paper') {
           return 'You lost, the computer beat you'
            } else 
             return 'Congratulations, you won'
            }
            
          if (userChoice === 'paper'){
            if (computerChoice === 'scissors') {
           return 'You lost, the computer beat you'
            } else 
             return 'Congratulations, you won'
          }
         
          if (userChoice === 'scissors') {
            if (computerChoice === 'rock') {
              return 'You lost, the computer beat you'
            } else 
            return 'Congratulations, you won'
          }      
      
      
        if (userChoice === 'bomb'){
          return 'Congratulations, you won'
        }
      };
          const playGame = () => {
            const userChoice = getUserChoice('bomb');
            const computerChoice = getComputerChoice();
            console.log ('You threw: ' + userChoice);
            console.log ('The Computer threw: ' + computerChoice);
            console.log(determineWinner(userChoice, computerChoice));
          };

          playGame();

          //sleep calculator
          
          const getSleepHours = day => {
            if (day === 'Monday'){
              return 8;
            } else if (day === 'Tuesday'){
              return 5;
            } else if (day === 'Wednesday'){
              return 9;
            } else if (day === 'Thursday') {
              return 10;
            } else if (day == 'Friday') {
              return 9;
            } else if (day == 'Saturday') {
              return 8;
            } else (day == 'Sunday') 
            return 11;
          };
            console.log(getSleepHours('Monday'));
            console.log(getSleepHours('Tuesday'));
            console.log(getSleepHours('Wedneday'));
            console.log(getSleepHours('Thursday'));
            console.log(getSleepHours('Friday'));
            console.log(getSleepHours('Saturday'));
            console.log(getSleepHours('Sunday'));
          
          const getActualSleepHours = () => {
           return getSleepHours('Monday')
          + getSleepHours('Tuesday')
          + getSleepHours('Wednesday')
          + getSleepHours('Thursday')
          + getSleepHours('Friday')
          + getSleepHours('Saturday')
          + getSleepHours('Sunday')
      
        }; 
          
          console.log(getSleepHours('Monday'));
          console.log(getActualSleepHours());

          const getIdealSleepHours = () => {
          let idealHours = 8;
          return idealHours * 7;
          };
          
          // console.log(getIdealSleepHours());
          
          const calculateSleepDebt = () => {
            const actualSleepHours = getActualSleepHours();
            const idealSleepHours = getIdealSleepHours();
          
          
          if (actualSleepHours === idealSleepHours) {
            console.log ('The user got the perfect amount of sleep');
          } else if (actualSleepHours > idealSleepHours) {
            console.log ("The user got " + (actualSleepHours - idealSleepHours) + " more hours of sleep than needed");
          } else if (actualSleepHours < idealSleepHours) {
            console.log ("The user should get some rest.  Because you slept " + (idealSleepHours - actualSleepHours) + " hours less this week.");
          } else {
            console.log('Error, Something went wrong.')
          }
        }
          calculateSleepDebt()

//Scope 

          // The scope of `random` is too loose 

const name = 'Nala';
const getRandEvent = () => {
const random = Math.floor(Math.random() * 3);
  if (random === 0) {
    return 'Marathon';
  } else if (random === 1) {
    return 'Triathlon';
  } else if (random === 2) {
    return 'Pentathlon';
  }
};

// The scope of `days` is too tight 
const getTrainingDays = event => {
let days;
  if (event === 'Marathon') {
  days = 50;
  } else if (event === 'Triathlon') {
  days = 100;
  } else if (event === 'Pentathlon') {
    days = 200;
  }
  return days;
};

// The scope of `name` is too tight 
const logEvent = (name, event) => {
  // const name = 'Nala';
  console.log(`${name}'s event is: ${event}`);
};

const logTime = (name, days) => {
  
  console.log(`${name}'s time to train is: ${days} days`);
};

const event = getRandEvent();
const days = getTrainingDays(event);
// Define a `name` variable. Use it as an argument after updating logEvent and logTime 

const event2 = getRandEvent();
const days2 = getTrainingDays(event2);
const name2 = 'Warren';
 
logEvent(name2, event2);
logTime(name2, days2);
logEvent(name, event);
logTime(name, days);

const agreeOrDisagree = (first, second) => {
  
  if (first === second){
    console.log("You Agree");
  } else {
    console.log("You Disagree")
  }
}
console.log(agreeOrDisagree("apple", "apple"))
console.log(agreeOrDisagree("orange", "pear"))


//Life Age
function lifePhase(age) {

  if (0 <= age && age <= 3){
    return 'baby';
  } else if (4 <= age && age <= 12){
    return 'child'
  } else if (13 <= age && age <= 19){
    return 'teen'
  } else if (20 <= age && age <= 64){
    return 'adult'
  } else if (65 <= age && age <= 140){
    return 'senior citizen'
  } else {
    return 'This is not a valid age'
    }
  }
  console.log(lifePhase(2))
  console.log(lifePhase(10))
  console.log(lifePhase(15))
  console.log(lifePhase(45))
  console.log(lifePhase(100))
  console.log(lifePhase(-8))

  //Grades
const finalGrade = (g1, g2, g3) => {

  if ((g1 < 0 || g1 > 100) || (g2 < 0 || g2 > 100) || (g3 < 0 || g3 > 100)){
    return 'You have entered an invalid grade.'
  }
  let avg = (g1 + g2 + g3 ) / 3;
  if(avg >= 0 && avg <= 59) {
      return 'F'
} else if(avg >= 60 && avg <=69){
    return 'D'
} else if(avg >=70 && avg <=79){
    return 'C'
} else if(avg >=80 && avg <=89){
    return 'B'
} else if (avg >=90 && avg <=100){
    return 'A'
 } 
}

console.log(finalGrade(99, 92, 95))
console.log(finalGrade(65, 79, 89))

//reporting for duty.

const reportingForDuty = (rank, lastName) => {

  return (`${rank} ${lastName} reporting for duty!`)
  } 
  
  
  // Uncomment the line below when you're ready to try out your function
  console.log(reportingForDuty('Private', 'Fido'))
  console.log(reportingForDuty('Gen', 'Verma'))
  console.log(reportingForDuty('Col', 'Sanders love me some chicken'))


  //rolling the Dice and returning the number as a whole number
  const rollTheDice = () => {
    
    // Math.random() gives us a random number from 0 up to, but not including, 1
    // We multiplied that by 6 to get a number between 0 and up to, but not including, 6
    // But since we actually wanted numbers from 1 to 6, inclusive, we added 1
    // Math.floor() rounds the number so we have a whole number
      let die1 = Math.floor(Math.random()) * 6 + 1
      let die2 = Math.floor(Math.random()) * 6 + 1
      //returns the sum
      return die1 + die2;
      console.log(rollTheDice(die1 + die2 ));
    }

    function calculateWeight(earthWeight, planet) {
      switch (planet){
        case 'Mercury':
            return earthWeight * 0.378;
        case 'Venus':
            return  earthWeight * 0.907;
        case 'Mars':
            return  earthWeight * 0.377;
        case 'Jupiter':
             return earthWeight * 2.36;
        case 'Saturn':
             return earthWeight * 0.916;
        default:
            return  'Invalid Planet Entry. Try: Mercury, Venus, Mars, Jupiter, or Saturn.'
            }
        }
          // Uncomment the line below when you're ready to try out your function
      console.log(calculateWeight(100, 'Mercury'));


//truthy or falsy
const truthyOrFalsy = (num) => {
  if (num = num) {
    return true
  } else
  return false
}

console.log(truthyOrFalsy(0))
console.log(truthyOrFalsy(3))
console.log(truthyOrFalsy(90))
console.log(truthyOrFalsy(true))
console.log(truthyOrFalsy(false))


//Imaginary Friends
function numImaginaryFriends(imaginaryFriends) {

return (Math.ceil(imaginaryFriends / 4));

    }

  // Uncomment the lines below when you're ready to try out your function
  console.log(numImaginaryFriends(20)) 
  console.log(numImaginaryFriends(10))

    // silly sentence.
    const sillySentence = (adj, verb, noun) => {

      return (`I am so ${adj} because I ${verb} coding! Time to write some more awesome ${noun}!`);  
      }
      
      // Uncomment the line below when you're ready to try out your function
      console.log(sillySentence('excited', 'love', 'functions')) 
      console.log(sillySentence('happy', 'live for', 'arrow functions'))


        const howOld = (age, year) => {
          // The following two lines make it so that our function always knows the current year.
              let dateToday = new Date();
              let thisYear = dateToday.getFullYear();
          // It is totally ok if your function used the current year directly!
            
              const yearDifference = year - thisYear
              const newAge = age + yearDifference
              if (newAge > age) {
                  return `You will be ${newAge} in the year ${year}`
              } else if (newAge < 0) {
                  return `The year ${year} was ${-newAge} years before you were born`
              } else {
                  return `You were ${newAge} in the year ${year}`
              }
          }

          // relationships  
          const whatRelation = percentSharedDNA => {

            if (percentSharedDNA === 100) {
            return 'You are likely identical twins.'
            }
            if (percentSharedDNA > 34) {
            return 'You are likely parent and child or full siblings.'
            }
            if (percentSharedDNA > 13) {
            return 'You are likely grandparent and grandchild, aunt/uncle and niece/nephew, or half siblings.'
            }
           if (percentSharedDNA > 5) {
           return 'You are likely 1st cousins.'
           }
           if (percentSharedDNA > 1) {
           return 'You are likely 2nd cousins.'
           }
           if (percentSharedDNA > 0) {
           return 'You are likely 3rd cousins'
           }
           
           return 'You are likely not related.'
           }
           
           console.log(whatRelation(34))
           console.log(whatRelation(3))
           console.log(whatRelation(100))
        
// Tip Calculator
const tipCalculator = (quality, total) => {

  if (quality === 'excellent'){
    return (total * .30);
  } else if (quality === 'good'){
    return (total * .20);
  } else if (quality === 'ok' || quality === 'okay'){
    return (total * .15);
  } else if (quality === 'bad'){
    return (total * .05);
  } else {
    return (total * .18)
  }
  }
  
  // Uncomment the line below when you're ready to try out your function
  console.log(tipCalculator('good', 100))
  console.log(tipCalculator('ok', 100))
  console.log(tipCalculator('okay', 100))
  //should return 20
  
  // Write your function here:

  function toEmoticon(emotion) {

    switch (emotion){
      case 'shrug':
        return '|_{"}_|'
      case 'smiley face':
        return ':)'
      case 'frowny face':
        return ':('
      case 'winky face':
        return ';)'
      case 'heart':
        return '<3'
      default:
        return '|_(* ~ *)_|'
    }
    
    }
    console.log(toEmoticon("shrug")) 
    console.log(toEmoticon("smiley face"))
    console.log(toEmoticon("frowny face"))
    console.log(toEmoticon("winky face"))
    console.log(toEmoticon("heart"))
    console.log(toEmoticon("yoyoyo"))

    // Create function below
function colorMessage(favoriteColor, shirtColor) {

  if(favoriteColor === shirtColor){
    return 'The shirt is your favorite color!'
  } else {
    return 'That is a nice color.'
  }
}
  console.log(colorMessage())


  // Write function below
const isEven = (number) => {
  return number % 2 === 0;
 } 
 console.log(isEven(2))
 console.log(isEven(3))

 
 // Create function here 
//  Create a function numberDigits() that takes the variable x as its only parameter.

// If the variable x is between 0 and 9, return the string 'One digit: N', where N is the value of x. For example, numberDigits(5) would return: 'One digit: 5'
// If the variable x is between 10 and 99, return the string 'Two digits: N', where N is the value of x. For example, numberDigits(12) would output:
// 'Two digits: 12'
// Any other value of x, including negative numbers, return the string 'The number is: N', where N is the value of x. For example, numberDigits(-202) would output:
// 'The number is: -202'
  const numberDigits = x => {
  let numString = '';
  if (x >= 0 && x <= 9){
    numString = 'One digit: ' + x;
  }else if (x >=10 && x <= 99){
    numString = 'Two digits: ' + x;
  }else {
    numString = 'The number is: ' + x;
  }

  return numString;
}

console.log(numberDigits(4))
console.log(numberDigits(-90))


// SQL database
// CREATE TABLE friends (
//   id INTEGER,
//   name TEXT,
//   birthday DATE
// );

// INSERT INTO friends (id, name, birthday)
// VALUES (1, 'Ororo Munroe', '1940-05-30');

// INSERT INTO friends (id, name, birthday)
// VALUES (2, 'Jason Cowley', '1983-06-16');

// INSERT INTO friends (id, name, birthday)
// VALUES (3, 'Artur Kapriyelov', '1985-05-09');

// UPDATE friends
// SET name = 'Storm'
// WHERE id = 1;

// ALTER TABLE friends
// ADD email TEXT;

// UPDATE friends
// SET email ='storm@codecademy.com'
// WHERE id = 1;

// UPDATE friends
// SET email ='jason@jason.net'
// WHERE id = 2;

// UPDATE friends
// SET email = 'artur@artur.com'
// WHERE id = 3;

// DELETE FROM friends
// WHERE id = 1;

// SELECT *
// FROM friends;

//arrays
const famousSayings = ['Fortune favors the brave.', 'A joke is a very serious thing.', 'Where there is love there is life.'];
const listItem = (famousSayings[0]);
console.log(famousSayings[0]);
console.log(famousSayings[2]);
console.log(famousSayings[3]);

// Re assigning arrays

// re assigning element in index 0 to Mayo, then printing it out.

let condiments = ['Ketchup', 'Mustard', 'Soy Sauce', 'Sriracha'];

const utensils = ['Fork', 'Knife', 'Chopsticks', 'Spork'];

condiments[0] = 'Mayo'

console.log(condiments);

// re assinging condiments to Mayo and printing it out.
condiments = ['Mayo'];

console.log(condiments);

// re assinging last item in utensils to Spoon and printing it out.
utensils[3] = ('Spoon');

console.log(utensils);

//push() function this will push items in the array

const chores = ['wash dishes', 'do laundry', 'take out trash'];

//pushes an item in the array
chores.push('wash car', 'code');

//prints the array
console.log(chores);

//pop() function no arguments passed this will pop the last item in the array.

const chores2 = ['wash dishes', 'do laundry', 'take out trash', 'cook dinner', 'mop floor'];

//prints the array before the pop.
console.log(chores2);

//removes last item in the array
chores2.pop();

// prints the array
console.log(chores2);

const groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];

//prints grocery list
console.log('Complete grocery List')
console.log(groceryList);

console.log('removes first time from grocery list')
//removes first item in the list
groceryList.shift();

//prints the groceryList
console.log(groceryList);

console.log('adds popcorn to the grocery list, in the front of the list')
//adds popcorn to the front
groceryList.unshift('popcorn');

//prints the groceryList
console.log(groceryList);

console.log('slices the list leaving 3 items array notation. Removes 1[0] and items after 4[3]')
//slices the list, removes the first item, and the item after 4, 
console.log(groceryList.slice(1,4));

//when doing console.log(groceryList) it prints the original list, it does not mutate the list
console.log('Prints the orignial groceryList not the sliced one.  slice() does not mutate aka change the list')

console.log(groceryList)

//indexOf
console.log('index Of pasta')
console.log(groceryList.indexOf('pasta'));
// console.log(pastaIndex);

const concept = ['arrays', 'can', 'be', 'mutated'];

//array arr[3] assigns the element to 'MUTATED'
function changeArr(arr){
  arr[3] = 'MUTATED';
}

//function changeArr called with a parameter of concept
changeArr(concept);

//logs concept

console.log(concept);

//function removeElement called with parameter of newArr
function removeElement(newArr){
  //newArr pops the last element in the array
  newArr.pop()
}
//function removeElement called with parameter concept
removeElement(concept);
//logs concept
console.log(concept);

const  numberClusters = [[1, 2], [3, 4], [5, 6]];

const target = numberClusters[2][1];
console.log(numberClusters)


// More practice with arrays[]
// Looking for more ways to practice? Consider trying these:
//
//     Use the .length property to find the last element of an array.
//     Use the other methods in MDN documentation not mentioned in the lesson.
//     Take all the elements in an array and make a string.
//     Find the return value of calling .push() on an array.
//     Nest an array within an array.
//     Access an element in the nested array.

const fruits = ['Apples', 'Oranges', 'Pears', 'Mangos']; 
fruits[2] = 'Bananas';
console.log(fruits); 

//Program Secret Message

let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];
//prints array length
console.log('Original Secret Message')
console.log(secretMessage.join(' '));
console.log('prints the length of the array')
console.log(secretMessage.length)
secretMessage.pop()
console.log('prints the length of the array after popping')
console.log(secretMessage.length);
secretMessage.push('to', 'Program');
console.log('added words to an array')
console.log(secretMessage.join(' '))
secretMessage[7] = 'right';
const learning = secretMessage.shift();
secretMessage.unshift('Programming');
secretMessage.splice(6,5,'know,');
//prints the secret message
console.log('prints the secret message')
console.log(secretMessage.join(' '));

//writing loops manually

const vacationSpots = ['Miami', 'North Carolina', 'Denver']

console.log(vacationSpots)
console.log(vacationSpots[0])
console.log(vacationSpots[1])
console.log(vacationSpots[2])

// Write your code below
let bobsFriends = ['Erik', 'John', 'Karl', 'Steve']
let tinasFriends = ['Jessica', 'Karl', 'Erik']
let mutualFriends = []
for (let i = 0; i < bobsFriends.length; i++){
    if(bobsFriends[i] === bobsFriends[i]){
      console.log("Bobs friends " + bobsFriends[i])
    }
    for (let j = 0; j < tinasFriends.length; j++){
    if(bobsFriends[i] === tinasFriends[j]){
      console.log("Tinas friends " + tinasFriends[j])
    }
  for (let m = 0; m < mutualFriends.length; m++){
    if(mutualFriends[m] === bobsFriends[i] && tinasFriends[j]){
  console.log("Our mutual friends " + bobsFriends[i] && tinasFriends)
    }
  }
  if(bobsFriends[i] === tinasFriends[j]){
    console.log('Bob and Tina have these friends in common: ' + bobsFriends[i] && tinasFriends[j])
  }
}
}
//Cards
const cards = ['diamond', 'spade', 'heart', 'club'];

// Write your code below
let currentCard = 'spade'
while (currentCard != 'spade'){
currentCard = cards[Math.floor(Math.random() * 4)];
console.log(currentCard);
}

// Write your code below
let cupsOfSugarNeeded = 3;
let cupsAdded = 0;
do {
  cupsAdded ++;
  console.log(cupsAdded + ' cup(s) was added')
} while (cupsAdded < cupsOfSugarNeeded);

const rapperArray = ["Lil' Kim", "Jay-Z", "Notorious B.I.G.", "Tupac"];

// Write your code below
for (let i = 0; i < rapperArray.length; i++){
  console.log(rapperArray[i]);
  if (rapperArray[i] === 'Notorious B.I.G.'){
    break; // breaks the loop after it meets the if statement, if the break statement isn't here it won't break the loop
  }
}

console.log("And if you don't know, now you know.");


//Whale Talk
let input = 'a whale of a deal!';
const vowels = ['a','e','i','o','u'];
let resultArray = [];
for(let i = 0; i < input.length; i++){
  for(let j = 0; j < vowels.length; j++){
    if(input[i] === vowels[j]){
      if(input[i] === 'e'){
        resultArray.push('ee')
      }
      else if(input[i] === 'u'){
        resultArray.push('uu')
      }
      else {
        resultArray.push(input[i])
      }
    }
  }
}
console.log("Your input is " + input)
console.log("In whale talk this is " + resultArray.join(' ').toUpperCase());