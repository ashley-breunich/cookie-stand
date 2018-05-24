'use strict';

var hoursOfOperation = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

var allLocations = [];
// var totalCookiesByHour = 0;
// var totalDailySales = 0;

function MakeShopLocation(name, minCustomer, maxCustomer, avgCookies){
  this.name = name;
  this.minCustomer = minCustomer;
  this.maxCustomer = maxCustomer;
  this.avgCookies = avgCookies;
  this.randCustByHour = [];
  this.cookiesPerHour = [];
  this.totalCookies = 0;
  allLocations.push(this);
}

//calculate random customers by hour
MakeShopLocation.prototype.getRandomCustomerByHour = function() {
  for (var i = 0; i < hoursOfOperation.length; i++) {
    this.randCustByHour.push(Math.floor(Math.random () * (this.maxCustomer - this.minCustomer + 1)) + this.minCustomer);
    console.log(this.randCustByHour[i]);
  }
};

//calculate Cookies Sold by Hour
MakeShopLocation.prototype.calcCookiesSoldByHour = function() {
  for(var j = 0; j < hoursOfOperation.length; j++) {
    this.cookiesPerHour.push(Math.round(this.avgCookies * this.randCustByHour[j]));
    console.log(this.cookiesPerHour[j]);
  }
};

MakeShopLocation.prototype.makeStands = function() {
  new MakeShopLocation('First and Pike', 23, 65, 6.3);
  new MakeShopLocation('SeaTac Airport', 3, 24, 1.2);
  new MakeShopLocation('Seattle Center', 11, 38, 3.7);
  new MakeShopLocation('Capitol Hill', 20, 38, 2.3);
  new MakeShopLocation('Alki', 2, 16, 4.6);
};

MakeShopLocation.prototype.header = function(){
  var cookiestands = document.getElementById('cookiestands'); // find cookiestands ID
  var trEl = document.createElement('tr'); // create row element called trEl
  var thEl = document.createElement('th'); // create rowheader element called thEl
  trEl.appendChild(thEl); // link the two up - header to row
  for (var i = 0; i < hoursOfOperation.length; i++){ // for as long as hours array
    thEl = document.createElement('th'); // create a header element
    thEl.textContent = hoursOfOperation[i]; // and add the hours index content to text
    trEl.appendChild(thEl); // link the two up - header to row
    cookiestands.appendChild(trEl); // link the two up - row to chart
  }
};

MakeShopLocation.prototype.header();

// // Pike + 1st Location
// var pike = {
//   minCustomer: 23,
//   maxCustomer: 65,
//   avgCookieSale: 6.3,
//   hoursOfOperation: ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: ', '8pm: '],
//   hourlySales: [],
//   totalDailySales: 0,
//   getRandom: function(minCustomer, maxCustomer) {
//     return Math.random() * (maxCustomer - minCustomer) + minCustomer;
//   },
// };

// //pike.getRandom(pike.minCustomer, pike.maxCustomer); // This is what goes into the parenthesis

// // Function for Calculating Cookies by Hour - Pike Location
// function cookiesByHourPike(){
//   for(var i = 0; i < pike.hoursOfOperation.length; i++){
//     var randomHourlyNumber = Math.round(pike.getRandom(pike.minCustomer, pike.maxCustomer) * pike.avgCookieSale);
//     pike.hourlySales.push(randomHourlyNumber);
//     pike.totalDailySales += pike.hourlySales[i];

//     var newEl = document.createElement('li');
//     var newText = document.createTextNode(pike.hoursOfOperation[i] + pike.hourlySales[i] + ' cookies');
//     newEl.appendChild(newText);
//     var position = document.getElementById('pike-list');
//     position.appendChild(newEl);
//   }

//   // Total Number of Cookies - Pike Location
//   var totalSalesPike = document.getElementById('pike-total');
//   var itemContent = totalSalesPike.innerHTML;
//   totalSalesPike.innerHTML = itemContent + pike.totalDailySales;
// }
// cookiesByHourPike();
