'use strict';

const methods = (iface) => {
  const res = [];
  for (const key in iface) {
    const fn = iface[key];
    if (typeof fn === 'function') {
      const method = [key, fn.length];
      res.push(method);
    }
  }
  return res;
};

module.exports = { methods };
