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


