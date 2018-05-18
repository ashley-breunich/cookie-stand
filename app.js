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

// SEATAC Airport Location
var seaTac = {
  minCustomer: 3,
  maxCustomer: 24,
  avgCookieSale: 1.2,
  getRandom: function(minCustomer, maxCustomer) {
    return Math.random() * (maxCustomer - minCustomer) + minCustomer;
  },
};

seaTac.getRandom(pike.minCustomer, pike.maxCustomer);

// Seattle Center Location
var seattleCenter = {
  minCustomer: 11,
  maxCustomer: 38,
  avgCookieSale: 3.7,
  getRandom: function(minCustomer, maxCustomer) {
    return Math.random() * (maxCustomer - minCustomer) + minCustomer;
  },
};

seattleCenter.getRandom(pike.minCustomer, pike.maxCustomer);

// Capitol Hill Location
var capHill = {
  minCustomer: 20,
  maxCustomer: 38,
  avgCookieSale: 2.3,
  getRandom: function(minCustomer, maxCustomer) {
    return Math.random() * (maxCustomer - minCustomer) + minCustomer;
  },
};

capHill.getRandom(pike.minCustomer, pike.maxCustomer);

// Alki Location
var alki = {
  minCustomer: 2,
  maxCustomer: 16,
  avgCookieSale: 4.6,
  getRandom: function(minCustomer, maxCustomer) {
    return Math.random() * (maxCustomer - minCustomer) + minCustomer;
  },
};

alki.getRandom(pike.minCustomer, pike.maxCustomer);