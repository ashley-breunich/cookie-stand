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
  this.cookiesSoldPerHour = [];
  this.totalCookies = 0;
  allLocations.push(this);
  this.getRandom = function(minCustomer, maxCustomer) {
    return Math.random() * (maxCustomer - minCustomer) + minCustomer;
  };
}

//calculate random customers by hour
MakeShopLocation.prototype.cookiesByHour = function() {
  for (var i = 0; i < hoursOfOperation.length; i++) {
    var randomHourlyNumber = Math.round(this.getRandom(this.minCustomer, this.maxCustomer) * this.avgCookies);
    this.cookiesSoldPerHour.push(randomHourlyNumber);
    this.totalCookies += this.cookiesSoldPerHour[i];
  }
};

function makeStands() {
  new MakeShopLocation('First and Pike', 23, 65, 6.3);
  new MakeShopLocation('SeaTac Airport', 3, 24, 1.2);
  new MakeShopLocation('Seattle Center', 11, 38, 3.7);
  new MakeShopLocation('Capitol Hill', 20, 38, 2.3);
  new MakeShopLocation('Alki', 2, 16, 4.6);
}

makeStands();

function header(){
  var cookiestands = document.getElementById('cookiestands'); // find cookiestands ID
  var theadEl = document.createElement('thead'); // create head element called theadEl
  var thEl = document.createElement('th'); // create rowheader element called thEl
  cookiestands.appendChild(theadEl); //links the two up - head to table
  theadEl.appendChild(thEl); // link the two up - header to head
  for (var i = 0; i < hoursOfOperation.length; i++){ // for as long as hours array
    thEl = document.createElement('th'); // create a header element
    thEl.textContent = hoursOfOperation[i]; // and add the hours index content to text
    theadEl.appendChild(thEl); // link the two up - header to head
  }
  thEl = document.createElement('th'); // create header row outside of loop
  thEl.textContent = 'Daily Total'; // add '' to text content
  theadEl.appendChild(thEl); // link the two up - header to row
}

header ();

MakeShopLocation.prototype.renderRow = function(){
  this.cookiesByHour();
  var cookiestands = document.getElementById('cookiestands'); // find cookiestand ID
  var trEl = document.createElement('tr'); // create a row called trEl
  cookiestands.appendChild(trEl);
  var thEl = document.createElement('th'); // create a header cell called thEl
  thEl.textContent = this.name; // Add the name of the store to that cell
  trEl.appendChild(thEl); //link the two up - header cell to row
  for (var i = 0; i < hoursOfOperation.length; i++){ // loop through
    var tdEl = document.createElement('td'); // create a data cell called tdEl
    tdEl.textContent = this.cookiesSoldPerHour[i]; // add cookie sold by hour to cell
    trEl.appendChild(tdEl); // link the two - data cell to row
  }
  tdEl = document.createElement('td'); // create a data cell
  tdEl.textContent = this.totalCookies; // add totalCookies amount to text content
  trEl.appendChild(tdEl); // link the two - data cell to row
};

// function footer (){
//   totalTotal = 0;
//   var cookiestands = document.getElementById('cookiestands');
//   var tfootEl = document.createElement('tfoot');
//   cookiestands.appendChild(tfootEl);
//   var thEl = document.createElement('th');
//   thEl.textcontent = 'Total Cookies';
//   tfootEl.appendChild(thEl);
// }

function renderTable() {
  for (var i = 0; i < allLocations.length; i++) {
    allLocations[i].renderRow();
  }
}
renderTable();