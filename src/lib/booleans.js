const negate = a => {
  return !a;
};

const both = (a, b) => {
  return a&&b;
};

const either = (a, b) => {
  return a||b;
};

const none = (a, b) => {
  return (!a&&!b);
};

const one = (a, b) => {
  // return a && !b || !a && b
  
  if ((a===true && b===false) || (a===false && b===true)) {
    return true} else {
      return false;
  }
};

const truthiness = a => {
  if (a){
    return true} else{
      return false;
  } 
};

const isEqual = (a, b) => {
  return a===b;
};

const isGreaterThan = (a, b) => {
  return a>b;
};

const isLessThanOrEqualTo = (a, b) => {
  return a<=b;
};

const isOdd = a => {
  if (a % 2==0){
    return false} else{
      return true;
    }
};

const isEven = a => {
  if (a % 2==0){
    return true} else{
      return false;
    }
};

const isSquare = a => {
  // return Math.sqrt(a) % 1 === 0;
  
  return Number.isInteger(Math.sqrt(a))
};

 
const startsWith = (char, string) => {
  return string.charAt(0) === char
};

const containsVowels = string => {
  if (string.match(/[aeiou]/gi)){
    return true} else {
      return false;
  }  
};

const isLowerCase = string => {
  return string == string.toLowerCase()
};

module.exports = {
  negate,
  both,
  either,
  none,
  one,
  truthiness,
  isEqual,
  isGreaterThan,
  isLessThanOrEqualTo,
  isOdd,
  isEven,
  isSquare,
  startsWith,
  containsVowels,
  isLowerCase
};
