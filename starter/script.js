'use strict';

const bookings = [];

const createBooking = function (
  flightNum,
  numPassangers = 1,
  price = 199 * numPassangers
) {
  // ES5
  //   numPassangers = numPassangers || 1; // default value
  //   price = price || 199; // default

  const booking = { flightNum, numPassangers, price };

  // console.log(booking);
  bookings.push(booking);
};

createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH123', 5);
createBooking('LH123', undefined, 1000);

/// ************************************** 134

const flight = 'LH234';
const deividas = {
  name: 'Deividas Strole',
  passport: 2536419874,
};

const checkIn = function (flightNum, passanger) {
  flightNum = 'LH999';
  passanger.name = 'Mr.' + passanger.name;

  if (passanger.passport === 2536419874) {
    // alert('Check in!');
  } else {
    // alert('Wrong Passport!');
  }
};

checkIn(flight, deividas);
///console.log(flight);
//console.log(deividas);

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 100000000);
};

newPassport(deividas);
checkIn(flight, deividas);

/// *********************************** 136

const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

// Higher-order function
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);
  console.log(`Transformed by: ${fn.name}`);
};

transformer('JavaScript is the best!', upperFirstWord);
console.log('/////////////////|||||');
transformer('JavaScript is the best!', oneWord);

// JS uses callbacks all the time
const high5 = function () {
  console.log('🙋‍♂️');
};

document.body.addEventListener('click', high5);

['Strole', 'Zigmas', 'Adomas'].forEach(high5);

/// *************************************** 137

//-------------------------------------------------------
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterH = greet('Hello!!!!!');

greeterH('Deividas');
//-------------------------------------------------------

const greetArr = greeting => name => console.log(`${greeting} ${name}`);

//

greeterH('Peividas');

greetArr('Hi')('Deividasssss');

/// ************************************* 138
console.log('******************************************  138 **');

const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(239, 'Deividas Strole');
lufthansa.book(635, 'Mikas Ridikas');
console.log(lufthansa);

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;

// doesn't work
//book(23, 'A B');

// Call methood
book.call(eurowings, 23, 'Sarah Williams');
console.log(eurowings);

book.call(lufthansa, 239, 'Mr. Cooper');
console.log(lufthansa);

const swiss = {
  airline: 'Swiss Air',
  iataCode: 'SW',
  bookings: [],
};

book.call(swiss, 555, 'Zigmas Ligmas');

// Apply methood
const flightData = [583, 'George Cooper'];
book.apply(swiss, flightData);
console.log(swiss);

// spread used nowdays instead if apply
book.call(swiss, ...flightData);

/// ************************************* 139
console.log('******************************************  139 **');

// Bind method
//book.call(swiss, 555, 'Zigmas Ligmas');

const bookEW = book.bind(eurowings);
const bookSW = book.bind(swiss);
bookEW(23, 'Steven Williams');

// flight number preset here
const bookEW23 = book.bind(eurowings, 23);
bookEW23('Deividas S.');
bookEW23('Lape Snape');

//0000000000000000000000000000000000000000000000000000000000000

// With Event Listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log('this: ', this);
  this.planes++;
  console.log('this.planes: ', this.planes);
};

document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// Partial application

const addTax = (rate, value) => value + value * rate;
console.log('net: ', addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23); // null is this keyword, but nothing here or addVAT = value => value + value * 0.23;

console.log('addVAT(100): ' + addVAT(100));

//
//
//

const addVATcb = function (gross) {
  return function (tax) {
    console.log(
      `Before tax: ${gross}, tax: ${tax}, with tax: ${gross + gross * tax}`
    );
  };
};

const getWT = addVATcb(100);
getWT(0.2);

/// *************************************************** 141
console.log('*************************************************** 141');

const runOnce = function () {
  console.log('This will never run again!');
};

runOnce();

//imediately invoced function expresion
(function () {
  console.log('This will never run again and again!');
})();

(() => console.log('This will never run again and again and again!'))();
