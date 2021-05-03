"use strict";

function randomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}



function PatStors(cityName, minCust, maxCust, avgCookie) 
{
  this.time = [
    "6am",
    "7am",
    "8am",
    "9am",
    "10am",
    "11am",
    "12pm",
    "1pm",
    "2pm",
    "3pm",
    "4pm",
    "5pm",
    "6pm",
    "7pm",
  ];
  
  this.numOfCust = 0;

  this.cityName = cityName;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookie = avgCookie;

  // methods
  this.getRandomCust = function (min, max) {
    this.numOfCust = randomNum(minCust, maxCust);
  };

  this.printAndTotal = function () 
  {
    let total = 0;

    for (let i = 0; i < this.time.length; i++)
    {
      let listItems = document.createElement("li");
      theParent.appendChild(listItems);
      let temp = randomNum(this.minCust, this.maxCust);
      listItems.textContent = `${this.time[i]}: ${temp} cookies`;
      total += temp;
    }

    let listItems = document.createElement("li");
    theParent.appendChild(listItems);
    listItems.textContent = `Total: ${total} cookies`;
  };
}


/* 1 */ 

let theParent = document.getElementById("Sales");

// -----------------------------------------------
/* Seattle */
let seattle = new PatStors("Seattle", 23, 65, 6.3); // creat obj
let header2 = document.createElement("h3"); // creat tag
theParent.appendChild(header2);  // set as a child 
header2.textContent = seattle.cityName; // to give it text and show it in my html page

let unOrederedList = document.createElement("ul"); // creat ul
theParent.appendChild(unOrederedList);  // make ul as a child
unOrederedList.textContent = seattle.printAndTotal(); // git ul the li valuse from for loop in the class

// -----------------------------------------------
//Tokyo
let tokyo = new PatStors ("Tokyo",3,24,1.2); // creat obj
let header3 = document.createElement('h3');
theParent.appendChild(header3);
header3.textContent = tokyo.cityName;

let ul2 = document.createElement('ul');
theParent.appendChild(ul2);
ul2.textContent = tokyo.printAndTotal(); 

// -----------------------------------------------
let dubai = new PatStors ("Dubai",11,38,3.7);


// -----------------------------------------------
// let paris = new PatStors ("Paris",20,38,2.3);

// -----------------------------------------------
// let lima = new PatStors ("Lima",2,16,4.6);

// -----------------------------------------------