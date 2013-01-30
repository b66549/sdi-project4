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
// Return true if it is an email or false if it is not
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

// Check if the string passed as the argument is a URL (starts with http:// or https://)
// Return true if it is a URL or false if it is not
var isStringAURL = function(string) {
	if (string.startsWith("http://") || string.startsWith("https://")) {
		return true;
	};
	return false;
};

// Take in a string and title-case it (make first letter in each word uppercase)
// Return the title-cased string
var titleCaseString = function(string) {
	
	// local variables
	var newString = "";
	var flagMakeUpperCase = true;
	var currentChar = "";
	
	// for loop through the string argument and add each character into new string,
	// making the first letter of each word uppercase
	for (var i = 0; i < string.length; i++) {
		currentChar = string[i];

		// Check if the current character is a space " "
		if (currentChar === " ") {
			newString += currentChar;
			flagMakeUpperCase = true;
		} else {
			// Character is not a space, so check if it needs to be uppercase
			if (flagMakeUpperCase) {
				newString += currentChar.toUpperCase();
				flagMakeUpperCase = false;
			} else {
				newString += currentChar.toLowerCase();
			};
		};
	};		
			
	return newString;
};

// Takes in a string, and two separators as arugments and then returns the string with every instance
// of the first separator in the string replaced by the second separator
var changeSeparator = function(string, separator1, separator2) {
	// local variables
	newString = "";
	
	// for loop to traverse string
	for (var i = 0; i < string.length; i++) {
		
		// If the current position starts with the first separator, add the second separator
		// to the new String instead. Otherwise, add the current character to the new String
		if (string.startsWith(separator1, i)) {
			newString += separator2;
			
			// Need to increment i by more than 1 if the first separator is a string length
			// greater than 1
			i += separator1.length - 1;
		} else {
			newString += string[i];
		};
	};
	
	return newString;
};


// main code to test library functions

// test isStringAPhoneNumber function
var string = ["123-456-7890", "1234567890", "123-456-78900", "123-4-5-6789"];
for (var i = 0; i < string.length; i++) {
	var isPhoneNumber = isStringAPhoneNumber(string[i]);
	console.log("Calling function isStringAPhoneNumber(\"" + string[i] + "\").");
	console.log("Is this a phone number? " + isPhoneNumber);
};

// test isStringAnEmail function
string = ["aaa@bbb.ccc", "aaabbb@ccc", "a@bbbccc.", "aaa.bbb@ccc"];
for (var i = 0; i < string.length; i++) {
	var isEmail = isStringAnEmail(string[i]);
	console.log("Calling function isStringAnEmail(\"" + string[i] + "\").");
	console.log("Is this an email address? " + isEmail);
};

// test isStringAURL function
string = ["http://www.yahoo.com", "https://mail.yahoo.com", "htp://yahoo.com", "ahttp://yahoo.com", "http:/www,yahoo.com"];
for (var i = 0; i < string.length; i++) {
	var isURL = isStringAURL(string[i]);
	console.log("Calling function isStringAURL(\"" + string[i] + "\").");
	console.log("Is this a URL? " + isURL);
};

// test titleCaseString function
string = ["HELLO WORLD", "hello world", "HelLO wORlD, i AM a stRING!", " heeloworld ", "A b c D 3 F g "];
for (var i = 0; i < string.length; i++) {
	var newTitleCaseString = titleCaseString(string[i]);
	console.log("Calling function titleCaseString(\"" + string[i] + "\").");
	console.log("String now title-cased: " + newTitleCaseString);
};

// test changeSeparator function
string = ["a/b/c", "file name is this", "Enter00The00Matrix", " 10001000110001110001", "XXXXIXXXX XXAXXMXX HXXIXXXDXDEXXNXX"];
var separator1 = ["/", " ", "00", "000", "X"]; 
var separator2 = [",", "_", " ", " + ", ""];
for (var i = 0; i < string.length; i++) {
	var changedStringSeparator = changeSeparator(string[i], separator1[i], separator2[i]);
	console.log("Calling function changeSeparator(\"" + string[i] + "\", \"" + separator1[i] + "\", \"" + separator2[i] + "\").");
	console.log("String now has separators replaced: " + changedStringSeparator);
};
