'use strict';

// Pike + 1st Location
var pike = {
  minCustomer: 23,
  maxCustomer: 65,
  avgCookieSale: 6.3,
  hoursOfOperation: ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: ', '8pm: '],
  hourlySales: [],
  totalDailySales: 0,
  getRandom: function(minCustomer, maxCustomer) {
    return Math.random() * (maxCustomer - minCustomer) + minCustomer;
  },
};

//pike.getRandom(pike.minCustomer, pike.maxCustomer); // This is what goes into the parenthesis

// Function for Calculating Cookies by Hour - Pike Location
function cookiesByHourPike(){
  for(var i = 0; i < pike.hoursOfOperation.length; i++){
    var randomHourlyNumber = Math.round(pike.getRandom(pike.minCustomer, pike.maxCustomer) * pike.avgCookieSale);
    pike.hourlySales.push(randomHourlyNumber);
    pike.totalDailySales += pike.hourlySales[i];
    var newEl = document.createElement('li');
    var newText = document.createTextNode(pike.hoursOfOperation[i] + pike.hourlySales[i] + ' cookies');
    newEl.appendChild(newText);
    var position = document.getElementById('pike-list');
    position.appendChild(newEl);
  }

  // Total Number of Cookies - Pike Location
  var totalSalesPike = document.getElementById('pike-total');
  var itemContent = totalSalesPike.innerHTML;
  totalSalesPike.innerHTML = itemContent + pike.totalDailySales;
}
cookiesByHourPike();

// SEATAC Airport Location
var seaTac = {
  minCustomer: 3,
  maxCustomer: 24,
  avgCookieSale: 1.2,
  open: 8,
  close: 6,
  hoursOfOperation: ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: ', '8pm: '],
  hourlySales: [],
  getRandom: function(minCustomer, maxCustomer) {
    return Math.random() * (maxCustomer - minCustomer) + minCustomer;
  },
};

//seaTac.getRandom(seaTac.minCustomer, seaTac.maxCustomer); // This is what goes into the parenthesis

// Function for Calculating Cookies by Hour -SeaTac Location
function cookiesByHourSeaTac(){
  for(var i = 0; i < seaTac.hoursOfOperation.length; i++){
    var randomHourlyNumber = Math.round(seaTac.getRandom(seaTac.minCustomer, seaTac.maxCustomer) * seaTac.avgCookieSale);
    seaTac.hourlySales.push(randomHourlyNumber);
    var newEl = document.createElement('li');
    var newText = document.createTextNode(seaTac.hoursOfOperation[i] + seaTac.hourlySales[i] + ' cookies');
    newEl.appendChild(newText);
    var position = document.getElementById('seatac-list');
    position.appendChild(newEl);
  }
}
cookiesByHourSeaTac();

// Seattle Center Location
var seattleCenter = {
  minCustomer: 11,
  maxCustomer: 38,
  avgCookieSale: 3.7,
  open: 8,
  close: 6,
  hoursOfOperation: ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: ', '8pm: '],
  hourlySales: [],
  getRandom: function(minCustomer, maxCustomer) {
    return Math.random() * (maxCustomer - minCustomer) + minCustomer;
  },
};

//seattleCenter.getRandom(seattleCenter.minCustomer, seattleCenter.maxCustomer); // This is what goes into the parenthesis

// Function for Calculating Cookies by Hour - Seattle Center Location
function cookiesByHourSeattleCenter(){
  for(var i = 0; i < seattleCenter.hoursOfOperation.length; i++){
    var randomHourlyNumber = Math.round(seattleCenter.getRandom(seattleCenter.minCustomer, seattleCenter.maxCustomer) * seattleCenter.avgCookieSale);
    seattleCenter.hourlySales.push(randomHourlyNumber);
    var newEl = document.createElement('li');
    var newText = document.createTextNode(seattleCenter.hoursOfOperation[i] + seattleCenter.hourlySales[i] + ' cookies');
    newEl.appendChild(newText);
    var position = document.getElementById('seattle-center-list');
    position.appendChild(newEl);
  }
}
cookiesByHourSeattleCenter();

// Capitol Hill Location
var capHill = {
  minCustomer: 20,
  maxCustomer: 38,
  avgCookieSale: 2.3,
  open: 8,
  close: 6,
  hoursOfOperation: ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: ', '8pm: '],
  hourlySales: [],
  getRandom: function(minCustomer, maxCustomer) {
    return Math.random() * (maxCustomer - minCustomer) + minCustomer;
  },
};

// capHill.getRandom(capHill.minCustomer, capHill.maxCustomer); // This is what goes in the parenthesis

// Function for Calculating Cookies by Hour - Cap Hill Location
function cookiesByHourCapHill(){
  for(var i = 0; i < capHill.hoursOfOperation.length; i++){
    var randomHourlyNumber = Math.round(capHill.getRandom(capHill.minCustomer, capHill.maxCustomer) * capHill.avgCookieSale);
    capHill.hourlySales.push(randomHourlyNumber);
    var newEl = document.createElement('li');
    var newText = document.createTextNode(capHill.hoursOfOperation[i] + capHill.hourlySales[i] + ' cookies');
    newEl.appendChild(newText);
    var position = document.getElementById('caphill-list');
    position.appendChild(newEl);
  }
}
cookiesByHourCapHill();

// Alki Location
var alki = {
  minCustomer: 2,
  maxCustomer: 16,
  avgCookieSale: 4.6,
  open: 8,
  close: 6,
  hoursOfOperation: ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: ', '8pm: '],
  hourlySales: [],
  getRandom: function(minCustomer, maxCustomer) {
    return Math.random() * (maxCustomer - minCustomer) + minCustomer;
  },
};

// Function for Calculating Cookies by Hour - Alki Location
function cookiesByHourAlki(){
  for(var i = 0; i < alki.hoursOfOperation.length; i++){
    var randomHourlyNumber = Math.round(alki.getRandom(alki.minCustomer, alki.maxCustomer) * alki.avgCookieSale);
    alki.hourlySales.push(randomHourlyNumber);
    var newEl = document.createElement('li');
    var newText = document.createTextNode(alki.hoursOfOperation[i] + alki.hourlySales[i] + ' cookies');
    newEl.appendChild(newText);
    var position = document.getElementById('alki-list');
    position.appendChild(newEl);
  }
}
cookiesByHourAlki();

// alki.getRandom(alki.minCustomer, alki.maxCustomer); // This is what goes in the parenthesis