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