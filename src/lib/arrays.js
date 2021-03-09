const getNthElement = (index, array) => {
  return array[index % 4];
};

const arrayToCSVString = array => {
  return array.join();
};

const csvStringToArray = string => {
  return string.split(",");
};

const addToArray = (element, array) => {
  array.push(element);
};

const addToArray2 = (element, array) => {
  return array.concat(element);
};

const removeNthElement = (index, array) => {
  return array.splice(index, 1);
};

const numbersToStrings = numbers => {
  return numbers.map(String);
};

const uppercaseWordsInArray = strings => {
  return strings.map(element => element.toUpperCase());
};

const reverseWordsInArray = strings => { 
  return strings.map(element => element.split("").reverse().join(""));
};
  

const onlyEven = numbers => {
  return numbers.filter(number => number % 2 === 0);
};

const removeNthElement2 = (index, array) => {
  return array.filter(element => element !== array[index]);
};

const elementsStartingWithAVowel = strings => {
  return strings.filter(element => element.charAt(0).match(/[aeiou]/gi));
};

const removeSpaces = string => {
  return string.split(' ').join('');
};

const sumNumbers = numbers => {
  return numbers.reduce((a,b) => a + b);
};

const sortByLastLetter = strings => {
  return strings.sort((a, b) => (a.charCodeAt(a.length -1))-(b.charCodeAt(b.length -1)));
};

module.exports = {
  getNthElement,
  arrayToCSVString,
  csvStringToArray,
  addToArray,
  addToArray2,
  removeNthElement,
  numbersToStrings,
  uppercaseWordsInArray,
  reverseWordsInArray,
  onlyEven,
  removeNthElement2,
  elementsStartingWithAVowel,
  removeSpaces,
  sumNumbers,
  sortByLastLetter
};

