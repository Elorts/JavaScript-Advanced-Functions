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
