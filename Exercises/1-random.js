'use strict';

const random = (min, max) => {
  if (!max) return Math.floor(Math.random() * min);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

module.exports = { random };
