var hoursElem = document.getElementById("hours");
var tblElem = document.createElement("table");
var hours = [
  "Total",
  "10a",
  "11a",
  "12p",
  "1p",
  "2p",
  "3p",
  "4p",
  "5p"
];

function CookieStand (locName, minCust, maxCust, avgCookies){
  this.locName = locName;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookies = avgCookies;
  this.hourlyCookies = [];
  this.dailyCookies = 0;
}

CookieStand.prototype.customerRand = function(min, max){
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

CookieStand.prototype.generateHourly = function(){
  for (var i = 1; i < hours.length; i++){
    var cookiesThisHour = this.customerRand(this.minCust, this.maxCust) * this.avgCookies;
    this.hourlyCookies.push(cookiesThisHour);
    this.dailyCookies += cookiesThisHour;
  }
}

CookieStand.prototype.render = function(){
  this.generateHourly();
  var trElem = document.createElement("tr")
  var tdElem = document.createElement("td");
  tdElem.textContent = this.locName;
  trElem.appendChild(tdElem);
  tblElem.appendChild(trElem);
  tdElem.className = "firstColumn";

  var totElem = document.createElement("td");
  totElem.textContent = Math.round(this.dailyCookies);
  trElem.appendChild(totElem);
  hoursElem.appendChild(tblElem);

  for (var i = 0; i < this.hourlyCookies.length; i++){
    var tdElem = document.createElement("td");
    tdElem.textContent = Math.round(this.hourlyCookies[i]);
    trElem.appendChild(tdElem);
  }
}

function firstLine(){
  hoursElem = document.getElementById("hours");
  tblElem = document.createElement("table");
  var thElem = document.createElement("th");
  thElem.textContent = "Locations";
  tblElem.appendChild(thElem);
  thElem.className = "firstColumn";

  for (var i = 0; i < hours.length; i++){
    var thElem = document.createElement("th");
    thElem.textContent = hours[i];
    tblElem.appendChild(thElem);
    hoursElem.appendChild(tblElem);
  }
}

var pikePlace = new CookieStand ("Pike Place", 17, 88, 5.2);
var seaTac = new CookieStand ("SeaTac Airport", 6, 44, 1.2);
var southCenter = new CookieStand ("Southcenter Mall", 11, 38, 1.9);
var bellevue = new CookieStand ("Bellevue Mall", 20, 48, 3.3);
var alki = new CookieStand ("Alki", 3, 24, 2.6);

firstLine();
pikePlace.render();
seaTac.render();
southCenter.render();
bellevue.render();
alki.render();
