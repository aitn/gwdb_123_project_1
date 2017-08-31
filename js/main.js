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
	
	// TODO : look up passing events thru as parameters to non~anonymous functions
	// myButtons[i].onclick = myAlert(e);
	
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

function myAlert(e) {
	var e = e || window.event;
	alert("the " + e.srcElement.localName + " " + e.srcElement.className + " was clicked!!!");
}

// fun with arrays!

var myArray = [ 1, 2, 3, 4, 5, 6, 32, 213, 11, 0, 8.9 ];	
	var sum = 0;
	var highestValue = 0;
	var lowestValue = 9999;
	var myArrayCopy = new Array();
	
	for ( var i=0; i < myArray.length ; ++i ) {
		
		console.log(sum);
		sum += myArray[i];	// calculate sum of all values in array
		if ( highestValue < myArray[i] ) highestValue = myArray[i]; // find the highest value in an array
		if ( lowestValue > myArray[i] ) lowestValue = myArray[i]; 	// find the lowest value in an array
		
		myArrayCopy[i] = myArray[i];		// copy an array super old skool style.
	
	}
	
	console.log("the final sum is : " + sum);
	console.log("the average of the values in the array is : " + sum / myArray.length);
	console.log("the highest value in the array is : " + highestValue);
	console.log("here's myArrayCopy : ");
	console.log(myArrayCopy);

