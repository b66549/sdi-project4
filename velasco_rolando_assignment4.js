// Rolando Velasco
// 01-31-2013
// Project 4
// Code library

var RVLibrary = function() {	
	
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
		
		// local variables
		var substring1 = string.substring(0, 7);
		var substring2 = string.substring(0, 8);

		if (substring1 === "http://" || substring2 === "https://") {
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
		var newString = "";
		var sep1Length = separator1.length;
		var substring = "";
		
		// for loop to traverse string
		for (var i = 0; i < string.length; i++) {
			substring = string.substring(i, i+sep1Length);

			if (substring === separator1) {
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
	
	// Takes in three number arguments, checks if the first number is less than or greater than the second number,
	// then use the third number to see if the first number is within the percentage of the second number.
	var fuzzyMatchNumber = function(num1, num2, num3) {
		
		// local veriables
		var percent = 0.00;
		var delta = 0;
		var difference = 0;
		var results = "";

		// First, check if num1 and num2 are the same.  If so, by default it's a match so return the results
		if (num1 === num2) {
			results += num1 + " is the same as " + num2 + " and therefore is within " + num3 + "%."
			return results;
		};

		// Use conditional to determine if num1 is less than or greater than num2, then add to the results
		if (num1 < num2) {
			results += num1 + " is less than " + num2 + " ";
		} else {
			results += num1 + " is greater than " + num2 + " ";
		};
		
		percent = num3 / 100;
		delta = num2 * percent;
		difference = Math.abs(num2 - num1);
		if (difference <= delta) {
			results += "and is within " + num3 + "%.";
		} else {
			results += "and is not within " + num3 + "%.";
		};
		
		return results;			
	};

	//
	var nextHighestNumber = function(array, num) {
		
		// local variables;
		var nextHighest = -1; // means none set
		
		for (var i = 0; i < array.length; i++) {
			var currentNum = array[i];
			if (currentNum > num) {
				if (nextHighest === -1 || currentNum < nextHighest) {
					nextHighest = currentNum;
				};
			};
		};
		return nextHighest; // there are no next number greater than num
	};

	return {
		"isStringAPhoneNumber": isStringAPhoneNumber,
		"isStringAnEmail": isStringAnEmail,
		"isStringAURL": isStringAURL,
		"titleCaseString": titleCaseString,
		"changeSeparator": changeSeparator,
		"fuzzyMatchNumber": fuzzyMatchNumber,
		"nextHighestNumber": nextHighestNumber
	};
		
};

// main code to test library functions

// create a new library
var newLib = new RVLibrary();

// test isStringAPhoneNumber function
var string = ["123-456-7890", "1234567890", "123-456-78900", "123-4-5-6789"];
for (var i = 0; i < string.length; i++) {
	var isPhoneNumber = newLib.isStringAPhoneNumber(string[i]);
	console.log("Calling function isStringAPhoneNumber(\"" + string[i] + "\").");
	console.log("Is this a phone number? " + isPhoneNumber);
};

// test isStringAnEmail function
string = ["aaa@bbb.ccc", "aaabbb@ccc", "a@bbbccc.", "aaa.bbb@ccc"];
for (var i = 0; i < string.length; i++) {
	var isEmail = newLib.isStringAnEmail(string[i]);
	console.log("Calling function isStringAnEmail(\"" + string[i] + "\").");
	console.log("Is this an email address? " + isEmail);
};

// test isStringAURL function
string = ["http://www.yahoo.com", "https://mail.yahoo.com", "htp://yahoo.com", "ahttp://yahoo.com", "http:/www,yahoo.com"];
for (var i = 0; i < string.length; i++) {
	var isURL = newLib.isStringAURL(string[i]);
	console.log("Calling function isStringAURL(\"" + string[i] + "\").");
	console.log("Is this a URL? " + isURL);
};

// test titleCaseString function
string = ["HELLO WORLD", "hello world", "HelLO wORlD, i AM a stRING!", " heeloworld ", "A b c D 3 F g "];
for (var i = 0; i < string.length; i++) {
	var newTitleCaseString = newLib.titleCaseString(string[i]);
	console.log("Calling function titleCaseString(\"" + string[i] + "\").");
	console.log("String now title-cased: " + newTitleCaseString);
};

// test changeSeparator function
string = ["a/b/c", "file name is this", "Enter00The00Matrix", " 10001000110001110001", "XXXXIXXXX XXAXXMXX HXXIXXXDXDEXXNXX"];
var separator1 = ["/", " ", "00", "000", "X"]; 
var separator2 = [",", "_", " ", " + ", ""];
for (var i = 0; i < string.length; i++) {
	var changedStringSeparator = newLib.changeSeparator(string[i], separator1[i], separator2[i]);
	console.log("Calling function changeSeparator(\"" + string[i] + "\", \"" + separator1[i] + "\", \"" + separator2[i] + "\").");
	console.log("String now has separators replaced: " + changedStringSeparator);
};

// test fuzzyMatchNumber function
var number1 = [5, 5, 7, 10, 3, 8];
var number2 = [10, 10, 5, 10, 1, 12]; 
var number3 = [50, 40, 40, 10, 50, 20];
for (var i = 0; i < string.length; i++) {
	var fuzzyMatchNumberResults = newLib.fuzzyMatchNumber(number1[i], number2[i], number3[i]);
	console.log("Calling function isFuzzyMatchNumber(" + number1[i] + ", " + number2[i] + ", " + number3[i] + ").");
	console.log(fuzzyMatchNumberResults);
};

// test nextHighestNumber function
var numbersArray = [[1, 4, 7, 9, 10, 14, 15], [10, 2, 6, 11, 5, 20, 1], [1, 3, 4]];
var number = [12, 5, 5]; 
for (var i = 0; i < numbersArray.length; i++) {
	var nextHigherNumber = newLib.nextHighestNumber(numbersArray[i], number[i]);
	console.log("Calling function nextHighestNumber([" + numbersArray[i] + "], " + number[i] + ").");
	if (nextHigherNumber === -1) {
		console.log("There is no number greater than " + number[i] + " in the array [" + numbersArray[i] + "].");
	} else {
		console.log("The smallest number greater than " + number[i] + " in the array [" + numbersArray[i] + "] is " + nextHigherNumber + ".");
	};
};