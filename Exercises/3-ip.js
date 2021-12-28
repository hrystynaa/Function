'use strict';

const ipToInt = (ip = '127.0.0.1') => {
  const cb = (previous, current) => (previous << 8) + parseInt(current);
  return ip.split('.').reduce(cb, 0);
};

module.exports = { ipToInt };
