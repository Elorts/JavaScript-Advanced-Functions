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

  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH123', 5);
createBooking('LH123', undefined, 1000);
