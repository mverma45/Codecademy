const addTwo = (num) => {
  return num + 2;
};

const checkConsistentOutput = (func, val) => {
 let checkA = val + 2;
 let checkB = func(val);
 return checkA === checkB ? func(val) : 'inconsistent results';
};

console.log(checkConsistentOutput(addTwo, 3));