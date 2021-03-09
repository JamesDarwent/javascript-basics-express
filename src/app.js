const express = require('express');
const app = express();
app.use(express.json());

const {
  sayHello,
  uppercase, 
  lowercase,
  firstCharacters } = require('./lib/strings');

const {
  add,
  subtract,
  multiply,
  divide,
  remainder } = require('./lib/numbers');

const {
  negate,
  truthiness,
  isOdd,
  startsWith } = require('./lib/booleans');

// Strings 

app.get('/strings/hello/:string', (req, res) => {
  res.status(200).json({ result: sayHello(req.params.string) });
});

app.get('/strings/upper/:string', (req, res) => {
  res.status(200).json({ result: uppercase(req.params.string) });
});

app.get('/strings/lower/:string', (req, res) => {
  res.status(200).json({ result: lowercase(req.params.string) });
});

app.get('/strings/first-characters/:string', (req, res) => {
  res.status(200).json({ result: firstCharacters(req.params.string, req.query.length || 1) });
});

// Numbers

app.get('/numbers/add/:numberone/and/:numbertwo', (req, res) => {
  
  const numberone = parseInt(req.params.numberone);
  const numbertwo = parseInt(req.params.numbertwo);

  if (isNaN(numberone) || isNaN(numbertwo)) {
    res.status(400).json({ error: 'Parameters must be valid numbers.' });
  } 
  else { res.status(200).json({ result: add(numberone, numbertwo) });
  }
});

app.get('/numbers/subtract/:numberone/from/:numbertwo', (req, res) => {

  const numberone = parseInt(req.params.numberone);
  const numbertwo = parseInt(req.params.numbertwo);

  if (isNaN(numberone) || isNaN(numbertwo)) {
    res.status(400).json({ error: 'Parameters must be valid numbers.' });
  } 
  else { res.status(200).json({ result: subtract(numbertwo, numberone) });
  }
});

app.post('/numbers/multiply', (req, res) => {
  
  const a = parseInt(req.body.a);
  const b = parseInt(req.body.b);
  
  if (!req.body.a || !req.body.b) {
    res.status(400).json({ error: 'Parameters "a" and "b" are required.' });
  } else if (isNaN(a) || isNaN(b)) {
    res.status(400).json({ error: 'Parameters "a" and "b" must be valid numbers.' });
  } else {
    res.status(200).json({ result: multiply(req.body.a, req.body.b) });
  };
});

app.post('/numbers/divide', (req, res) => {

  const a = parseInt(req.body.a);
  const b = parseInt(req.body.b);

  if (req.body.a === undefined || req.body.b === undefined) {
    res.status(400).json({ error: 'Parameters "a" and "b" are required.' });
  } else if (isNaN(a) || isNaN(b)) {
    res.status(400).json({ error: 'Parameters "a" and "b" must be valid numbers.' });
  } else if (a === 0) {
    res.status(200).json({ result: 0 });
  } else if (b === 0) {
    res.status(400).json({ error: 'Unable to divide by 0.' });
  } else {
    res.status(200).json({ result: divide(a, b) });
  }
});

app.post('/numbers/remainder', (req, res) => {

  const a = parseInt(req.body.a);
  const b = parseInt(req.body.b);

  if (req.body.a === undefined || req.body.b === undefined) {
    res.status(400).json({ error: 'Parameters "a" and "b" are required.' });
  } else if (isNaN(a) || isNaN(b)) {
    res.status(400).json({ error: 'Parameters must be valid numbers.' });
  } else if (a === 0) {
    res.status(200).json({ result: 0 });
  } else if (b === 0) {
    res.status(400).json({ error: 'Unable to divide by 0.' });
  } else {
    res.status(200).json({ result: remainder(a, b) });
  }
});

// Booleans

app.post('/booleans/negate', (req, res) => {
  res.status(200).json({ result: negate(req.body.value) });
});

app.post('/booleans/truthiness', (req, res) => {
  res.status(200).json({ result: truthiness(req.body.value) });
});

app.get('/booleans/is-odd/:value', (req, res) => {
  if (isNaN(parseInt(req.params.value))) {
    res.status(400).json({ error: 'Parameter must be a number.' })
  } else {
    res.status(200).json({ result: isOdd(req.params.value) });
  }
});

app.get('/booleans/:string/starts-with/:char', (req, res) => {
  const string = req.params.string;
  const char = req.params.char;
  if (char.length !== 1) {
    res.status(400)
    .json({ error: 'Parameter "character" must be a single character.' });
  } else {
    res.status(200).json({ result: startsWith(char, string) });
  }
});

app.get('/booleans/:string/starts-with/:firstchar', (req, res) => {
  if (req.params.firstchar.length !== 1) {
    res.status(400).json({ error: 'Parameter "character" must be a single character.' })
  } else {
  res.status(200).json({ result: startsWith(req.params.firstchar, req.params.string) });
}});


module.exports = app;
