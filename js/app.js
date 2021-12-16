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