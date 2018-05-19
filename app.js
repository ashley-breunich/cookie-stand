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
    return Math.round(Math.random()) * (maxCustomer - minCustomer) + minCustomer;
  },
};

pike.getRandom(pike.minCustomer, pike.maxCustomer);

// // Function for Calculating Cookies by Hour
function cookiesByHourPike(){
  for(var i = 0; i < pike.hoursOfOperation.length; i++){
    var randomHourlyNumber = pike.getRandom() * pike.avgCookieSale;
    pike.hourlySales.push(randomHourlyNumber);
    var newEl = document.createElement('li');
    var newText = document.createTextNode(pike.hoursOfOperation[i] + pike.hourlySales[i] + ' cookies');
    newEl.appendChild(newText);
    var position = document.getElementsByTagName('li')[i];
    position.appendChild(newEl);
  }
}
cookiesByHourPike();

// pike.totalDailySales = pike.totalDailySales + pike.hourlySales;

// // SEATAC Airport Location
// var seaTac = {
//   minCustomer: 3,
//   maxCustomer: 24,
//   avgCookieSale: 1.2,
//   open: 8,
//   close: 6,
//   getRandom: function(minCustomer, maxCustomer) {
//     return Math.random() * (maxCustomer - minCustomer) + minCustomer;
//   },
// };

// seaTac.getRandom(pike.minCustomer, pike.maxCustomer);

// // Seattle Center Location
// var seattleCenter = {
//   minCustomer: 11,
//   maxCustomer: 38,
//   avgCookieSale: 3.7,
//   open: 8,
//   close: 6,
//   getRandom: function(minCustomer, maxCustomer) {
//     return Math.random() * (maxCustomer - minCustomer) + minCustomer;
//   },
// };

// seattleCenter.getRandom(pike.minCustomer, pike.maxCustomer);

// // Capitol Hill Location
// var capHill = {
//   minCustomer: 20,
//   maxCustomer: 38,
//   avgCookieSale: 2.3,
//   open: 8,
//   close: 6,
//   getRandom: function(minCustomer, maxCustomer) {
//     return Math.random() * (maxCustomer - minCustomer) + minCustomer;
//   },
// };

// capHill.getRandom(pike.minCustomer, pike.maxCustomer);

// // Alki Location
// var alki = {
//   minCustomer: 2,
//   maxCustomer: 16,
//   avgCookieSale: 4.6,
//   open: 8,
//   close: 6,
//   getRandom: function(minCustomer, maxCustomer) {
//     return Math.random() * (maxCustomer - minCustomer) + minCustomer;
//   },
// };

// alki.getRandom(pike.minCustomer, pike.maxCustomer);