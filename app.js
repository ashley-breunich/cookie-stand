'use strict';

// Pike + 1st Location
var pike = {
  minCustomer: 23,
  maxCustomer: 65,
  avgCookieSale: 6.3,
  getRandom: function(minCustomer, maxCustomer) {
    return Math.random() * (maxCustomer - minCustomer) + minCustomer;
  },
};

pike.getRandom(pike.minCustomer, pike.maxCustomer);