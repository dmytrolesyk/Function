'use strict';

// Generate random Number between from min to max
// Use Math.random() and Math.floor()
// See documentation at MDN
const random = (min, max) => min + Math.floor((Math.random() * (max - min)));

module.exports = { random };
