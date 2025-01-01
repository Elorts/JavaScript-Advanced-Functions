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

const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
  },
};
