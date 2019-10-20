'use strict';

const generateKey = (length, possible) => {
  const getRandomChar = () => Math.floor(Math.random() * possible.length);
  let key = '';
  for (let i = 0; i < length; i++) {
    key += possible[getRandomChar()];
  }
  return key;
};

module.exports = { generateKey };

