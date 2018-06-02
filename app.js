'use strict';

var hoursOfOperation = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

var allLocations = [];
var totalCookiesByHour = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var cookieStands = document.getElementById('cookiestands');
var storeForm = document.getElementById('store-form');
// var footerRow = document.getElementById('footer-row');
var totalDailySales = 0;

function MakeShopLocation(name, minCustomer, maxCustomer, avgCookies){
  this.name = name;
  this.minCustomer = minCustomer;
  this.maxCustomer = maxCustomer;
  this.avgCookies = avgCookies;
  this.cookiesSoldPerHour = [];
  this.totalCookies = 0;
  allLocations.push(this);
}

//calculate random # of customers
MakeShopLocation.prototype.getRandom = function() {
  return Math.random() * (this.maxCustomer - this.minCustomer) + this.minCustomer;
};

//calculate random # of cookies by hour
MakeShopLocation.prototype.cookiesByHour = function() {
  for (var i = 0; i < hoursOfOperation.length; i++) {
    var randomHourlyNumber = Math.round(this.getRandom(this.minCustomer, this.maxCustomer) * this.avgCookies);
    this.cookiesSoldPerHour.push(randomHourlyNumber);
    totalCookiesByHour[i] += this.cookiesSoldPerHour[i];
    this.totalCookies += this.cookiesSoldPerHour[i];
  }
  totalDailySales += this.totalCookies;
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
  cookieStands; //find cookiestands ID
  var theadEl = document.createElement('thead'); // create head element called theadEl
  var thEl = document.createElement('th'); // create rowheader element called thEl
  cookieStands.appendChild(theadEl); //links the two up - head to table
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
  cookieStands; // find cookiestand ID
  var trEl = document.createElement('tr'); // create a row called trEl
  cookieStands.appendChild(trEl);
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

// render all location rows
function renderLocationRows() {
  for (var i = 0; i < allLocations.length; i++) {
    allLocations[i].renderRow();
  }
}
renderLocationRows();

//Creating footer row
function footer(){
  cookieStands; // find cookieStands ID
  var tfootEl = document.createElement('tfoot'); // create tfoot element
  // tfootEl.setAttribute('id', 'footer-row');
  cookieStands.appendChild(tfootEl); // link the two = tfoot to table
  var thEl = document.createElement('th'); // create header element
  thEl.textContent = 'Daily Total'; // add Daily Total text to the header element
  tfootEl.appendChild(thEl); // link the two = header element to tfoot
  for (var i = 0; i < hoursOfOperation.length; i++){ // loop through
    var tdEl = document.createElement('td'); // create a data cell called tdEl
    tdEl.textContent = totalCookiesByHour[i]; // add cookie sold by hour to cell
    tfootEl.appendChild(tdEl); // link the two - data cell to row
  }
  tdEl = document.createElement('td'); // create a data cell
  tdEl.textContent = totalDailySales; // add totalCookies amount to text content
  tfootEl.appendChild(tdEl); // link the two - data cell to row
}
footer();

//beginning of form functionality

//function to clear fields
function clearFields(event){
  event.target.storename.value = null;
  event.target.mincustomer.value = null;
  event.target.maxcustomer.value = null;
  event.target.avgcookie.value = null;
}

//clears table after form submit
function clearTable(){
  totalCookiesByHour = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  totalDailySales = 0;
  for(var i = 0; i < allLocations.length; i++){
    allLocations[i].totalCookies = 0;
  }
  var remove = document.getElementById('cookiestands');
  remove.innerHTML = '';
}

//REMINDER(DECLARED UP TOP) - var storeForm = document.getElementById('store-form');
storeForm;
function handleAdditionalStore(event) {
  event.preventDefault();
  if (!event.target.storename.value || !event.target.mincustomer.value || !event.target.maxcustomer.value || !event.target.avgcookie.value){
    return alert('All fields must be filled in.');
  }
  //create variables for new store
  var newStoreName = event.target.storename.value;
  var newStoreMinCustomer = parseInt(event.target.mincustomer.value);
  var newStoreMaxCustomer = parseInt(event.target.maxcustomer.value);
  var newStoreAvgCookie = parseInt(event.target.avgcookie.value);

  new MakeShopLocation(newStoreName, newStoreMinCustomer, newStoreMaxCustomer, newStoreAvgCookie);

  clearFields(event);

  clearTable();
  header();
  renderLocationRows();
  footer();
}

storeForm.addEventListener('submit', handleAdditionalStore);


// function clearTable(){
//   for(var i = 0; i < locations.length; i++){
//     locations[i].cookieArr = [];
//   }
//   var remove = document.getElementById('locations');
//   remove.innerHTML = '';
// }

// form.addEventListener('submit', formData);
// printSales();
// footer();