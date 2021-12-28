'use strict';

const generateKey = (length, possible) => {
  let key = '';
  const max = possible.length;
  for (let i = 0; i < length; i++) {
    const pos = Math.floor(Math.random() * max);
    key += possible.charAt(pos);
  }
  return key;
};

module.exports = { generateKey };
