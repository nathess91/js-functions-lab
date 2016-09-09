// Question 1
function maxOfTwoNumbers(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
}

// Question 2
function maxOfThree(num1, num2, num3) {
  if (num1 > num2 && num1 > num3) {
    return num1;
  } else if (num2 > num1 && num2 > num3) {
    return num2;
  } else {
    return num3;
  }
}

// Question 3
var vowels = ['a','e','i','o','u'];

function isCharacterAVowel(x) {
  if (vowels.indexOf(x) !== -1) {
    return true;
  }
  else {
    return false;
  }
}

// Question 4
var myArray = [1,2,3,4];

function sumArray(array) {
  var total = 0;
  for (var i = 0; i < array.length; i++) {
    total += array[i];
  }
  return total;
}


// Question 4
var myArray = [1,2,3,4];

function multiplyArray(array) {
  var total = 1;
  for (var i=0; i<array.length; i++) {
    total *= array[i];
  }
  return total;
}


// Question 5
function countArgs(args) {
  var counter = 0;
  if (args === undefined) {
    return "No arguments given";
  } else {
      for (var i = 0; i < args.length; i++) {
        counter++;
      }
  }
  return counter;
}



// Question 6
var reversed = [];
var name = "Chris Natalia";

function reverseString(string) {
  for (var i = string.length - 1; i >= 0; i--) {
    reversed.push(string[i]);
  }
  return reversed.join("");
}


// Question 7
var fruitArray = ["apples", "bananas","oranges"];

function findLongestWord(array) {
  var longest = 0;
  for (var i =0; i < array.length; i++) {
      if (array[i].length > longest) {
        longest = array[i].length;
      }
  }
  return longest;
}


// Question 8
var statesArray = ["California", "Nevada", "Oregon", "Ohio"];
var longestArray = [];

function filterLongWords(array, i) {
  for (var j=0; j<array.length; j++) {
    if (array[j].length > i) {
      longestArray.push(array[j]);
    }
  }
  return longestArray;
}


// Bonus 1
// (hint: `prototype`)


// Bonus 2
function charactersOccurencesCount() {
  
}

