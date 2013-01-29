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
			
			//Lastly, check that there are no additional dashes in between the first and last
			if (string.charAt(4) !== "-" && string.charAt(5) !== "-" && string.charAt(6) !== "-") {
				return true;
			};
		};
	};
	
	return false;
};

// Check if the string passed as the argument is an email address (follows pattern aaa@bbb.ccc)
// Return true if it is an email or false it is not.
var isStringAnEmail = function(string) {
	
	// First find the locations of '@' and '.' in the string
	var atCharIndex = string.indexOf("@");
	var periodCharIndex = string.indexOf(".");
	
	// Check if the characters exist in the string.  If not, return false
	if (atCharIndex !== -1 && periodCharIndex !== -1) {
	
		// Check that there are in the right order and at least one character is in between them
		if ( periodCharIndex - atCharIndex > 1) {
			
			// Final check: the '@' symbol cannot be the first character in the string
			// The '.' symbol cannot be the last character in the string
			if (atCharIndex !== 0 && periodCharIndex !== (string.length - 1) ) {
				return true;
			};
		};
	};
	
	return false;
};

var isStringAURL = function() {

};

var titleCaseString = function() {

};

var changeSeparator = function() {

};


// main code to test library functions

// test isStringAPhoneNumber function
var string = ["123-456-7890", "1234567890", "123-456-78900", "123-4-5-6789"];
for (var i = 0; i < string.length; i++) {
	var isPhoneNumber = isStringAPhoneNumber(string[i]);
	console.log("Calling function isStringAPhoneNumber(" + string[i] + ").");
	console.log("Is this a phone number? " + isPhoneNumber);
};

// test isStringAnEmail function
string = ["aaa@bbb.ccc", "aaabbb@ccc", "a@bbbccc.", "aaa.bbb@ccc"];
for (var i = 0; i < string.length; i++) {
	var isEmail = isStringAnEmail(string[i]);
	console.log("Calling function isStringAnEmail(" + string[i] + ").");
	console.log("Is this an email address? " + isEmail);
};
 
