const createPerson = (name, age) => {
  return {
    name: name,
    age: age
  }
};

const getName = object => {
  return object.name;
};

const getProperty = (property, object) => {
  return object[property];
};

const hasProperty = (property, object) => {
 return object[property] ? true : false;
};

const isOver65 = person => {
  return person.age > 65 ? true : false;
};

const getAges = people => {
  return people.map(element => element.age);  
};

const findByName = (name, people) => {
  return people.find(element => name == element.name);
};

const findHondas = cars => {
  return cars.filter(element => element.manufacturer === "Honda");
};

const averageAge = people => {
  return people.map(element => element.age).reduce((a,b) => a + b) / people.length;
};

const createTalkingPerson = (name, age) => {
  return {
    name: name,
    age: age,
    introduce(hiName) {
      return `Hi ${hiName}, my name is ${name} and I am ${age}!`;
    }
  }
};

module.exports = {
  createPerson,
  getName,
  getProperty,
  hasProperty,
  isOver65,
  getAges,
  findByName,
  findHondas,
  averageAge,
  createTalkingPerson
};















