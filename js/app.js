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
        const plantNeedsWater = (day) => {
          if (day === 'Wednesday') {
            return true;
          } else {
            return false;
          }
        };
        
        //same code as above but it's a implicit return line only has one parameter and it's turned into a teranary operator.
        
        const plantNeedsWater = day => day === 'Wednesday' ? true : false;

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
            // console.log(getSleepHours('Monday'));
            // console.log(getSleepHours('Tuesday'));
            // console.log(getSleepHours('Wedneday'));
            // console.log(getSleepHours('Thursday'));
            // console.log(getSleepHours('Friday'));
            // console.log(getSleepHours('Saturday'));
            // console.log(getSleepHours('Sunday'));
          
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


          const city = 'New York City';
          function logCitySkyline() {
          let skyscraper = 'Empire State Building'
          return 'The stars over the ' + skyscraper + ' in ' + city;
          
          }
          console.log(logCitySkyline())

          const satellite = 'The Moon';
          const galaxy = 'The Milky Way';
          const stars = 'North Star';
          
          const callMyNightSky = () => {
            return `Night Sky: ${satellite}, ${stars}, and ${galaxy}`;
          }
            console.log(callMyNightSky());

            
            
            const logVisibleLightWaves = () => {
              const lightWaves = 'Moonlight';
              console.log(lightWaves);
            };
            logVisibleLightWaves();
            // //this going to give an error since lightWaves is out of scope.
            // console.log(lightWaves)



            const players = () => {
              const player1 = 'LeBron James';
              const player2 = 'Michael Jordan';
              console.log(player1);
              console.log(player2);
            };
            players();


            // The scope of `random` is too loose 
const random = Math.floor(Math.random() * 3);

const getRandEvent = () => {
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

  if (event === 'Marathon') {
    let days = 50;
  } else if (event === 'Triathlon') {
    let days = 100;
  } else if (event === 'Pentathlon') {
    let days = 200;
  }

  return days;
};

// The scope of `name` is too tight 
const logEvent = event => {
  const name = 'Nala';
  console.log(`${name}'s event is: ${event}`);
};

const logTime = days => {
  const name = 'Nala';
  console.log(`${name}'s time to train is: ${days} days`);
};

const event = getRandEvent();
const days = getTrainingDays(event);
// Define a `name` variable. Use it as an argument after updating logEvent and logTime 


logEvent(event);
logTime(days);
