// JavaScript Document


// simple dom manipulation

document.getElementById("pageTitle").innerHTML = "Hello World";

var myString = "My awesome project kinda sucks...";

var myElement = document.getElementById("pageSubTitle");

myElement.innerHTML = myString;

// console loggin'

var w = 42;
var x;

var y = 42;
var z = "42";

// fun w/ auto~typing.
var answer = w + y; // num + num
var answer2 = y + z; // num + string lol.


console.info("Now we're loggin'");
console.log(myElement);
console.log(myString);
console.log(x);
console.log(y);
console.log("-------");
console.log(answer);
console.log(answer2);

// click events and anonymous functions

var myButtons = document.getElementsByClassName("button");
var userMessage = document.getElementById("userMessage");

for (var i=0; i<myButtons.length; i++) {
	
	myButtons[i].onclick = function(e) {
		
		e.preventDefault();
		console.log(e);
		// you should never use javascript alerts. it is no longer the 90's...
		// alert("the " + e.srcElement.localName + " " + e.srcElement.className + " was clicked!!!");
		
		// create a message for the user and add it to the DOM
		var myMessage = "the " + e.srcElement.localName + " " + e.srcElement.className + " was clicked!!!";
		userMessage.innerHTML = myMessage;
		
	}
	
	
}
