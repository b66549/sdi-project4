// Rolando Velasco
// 01-31-2013
// Project 4
// Code library

// Check if the string passed as the argument is a phone number (follows pattern XXX-XXX-XXXX)
// Return true if it is a phone number or false if it is not.
var isStringAPhoneNumber = function(string) {
	
	// First, check that the dashes are in the correct locations of the string
	if ((string.indexOf("-") === 3) && (string.lastIndexOf("-") === 7)) {
	
		// Second, check that the length of the string is the same length as a phone number
		if (string.length === 12) {
			return true;
		} else {
			return false;
		};
	} else {
		return false;
	};
};

var isStringAnEmail = function() {


};

var isStringAURL = function() {

};

var titleCaseString = function() {

};

var changeSeparator = function() {

};


// main code to test library functions
var string = "123-456-7890";
var isPhoneNumber = isStringAPhoneNumber(string);
console.log("Calling function isStringAPhoneNumber(" + string + ").");
console.log("Is this a phone number? " + isPhoneNumber);
 