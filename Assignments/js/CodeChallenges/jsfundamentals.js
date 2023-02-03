function canIVote(num) {
    if (num >= 18) {
      return true;
    } else return false;
  }
// tests
  console.log(canIVote(12));
  console.log(canIVote(24));
  console.log(canIVote(5));
  console.log(canIVote(78));
    
//agree or disagree

  function agreeOrDisagree(string1, string2) {
    if (string1 === string2) {
      return "You agree!";
    } else {
      return "You disagree!";
    }
  }

//   tests

console.log(agreeOrDisagree("yep", "yep"))  // should print You agree
console.log(agreeOrDisagree("yep", "Yep"))  // should print You disagree, because second yep is capital Y
console.log(agreeOrDisagree("yup", "yup"))  // should print You agree
console.log(agreeOrDisagree("yup", "Nope"))  // should print You disagree


// life phases
// arrow function
// const lifePhase = (age) => {
// regular function
    function lifePhase(age){
    if (age < 0 || age > 140) {
      return 'This is not a valid age';
    } else if (age < 4) {
      return 'baby';
    } else if (age < 13) {
      return 'child';
    } else if (age < 20) {
      return 'teen';
    } else if (age < 65) {
      return 'adult';
    } else {
      return 'senior citizen';
    }
  };

  
  //tests
  console.log(lifePhase(5));  // prints child
  console.log(lifePhase(89)); // prints senior citizen
  console.log(lifePhase(-8)); // prints this is not a valid age


  const rollTheDice = () => {
  // Math.random() gives us a random number from 0 up to, but not including, 1
  // We multiplied that by 6 to get a number between 0 and up to, but not including, 6
  // But since we actually wanted numbers from 1 to 6, inclusive, we added 1
  let die1 = Math.floor(Math.random()) * 6 + 1;
  let die2 = Math.floor(Math.random()) * 6 + 1;
  return die1 + die2;
};

