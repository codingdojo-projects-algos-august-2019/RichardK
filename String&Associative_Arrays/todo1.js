// Remove Blanks
// Create a function that, given a string, returns all of that string’s contents, but without blanks. 

// If given the string " Pl ayTha tF u nkyM usi c ", return "PlayThatFunkyMusic".

str1 = " Pl ayTha tF u nkyM usi c ";

function removeBlanks(str){
  newStr = "";
  for(var i=0; i<str.length; i++){
    console.log(str[i], str.charCodeAt(i)); 
    if(str.charCodeAt(i) != 32){
      newStr = newStr + str[i]
    }
  }
  return newStr;
}

removeBlanks(str1);

// Get Digits
// Create a JavaScript function that given a string, returns the integer made from the string’s digits. Given "0s1a3y5w7h9a2t4?6!8?0", the function should return the number 1357924680.

str1 = "0s1a3y5w7h9a2t4?6!8?0";

function getDigits(str){
  var newStr = "";
  for(var i=0; i<str.length; i++){
    console.log(str.charCodeAt(i));
    if(str.charCodeAt(i)>=48 && str.charCodeAt(i)<=57){
      newStr = newStr + str[i];
    }
  }
  return parseInt(newStr);
}

getDigits(str1);

// Acronyms
// Create a function that, given a string, returns the string’s acronym (first letters only, capitalized). 

// Given " there's no free lunch - gotta pay yer way. ", return "TNFL-GPYW". 

// Given "Live from New York, it's Saturday Night!", return "LFNYISN".

function acronyms(str){
    var newStr = "";
    
    if(!str.length){
        return null;
    }
    str = str.toUpperCase();
    var arr = str.split(" ");
    for(var i=0; i<arr.length; i++){
        if(
            (arr[i].charCodeAt(0) >= 65 && 
            arr[i].charCodeAt(0) <= 90) ||
            arr[i].charCodeAt(0) === 45
        ){
            newStr = newStr + String(arr[i][0])
        }
    }
    return newStr;
}
console.log(`acronyms("there's no free lunch  -  gotta pay yer way")`);
console.log(acronyms("there's no free lunch  -  gotta pay yer way"));
console.log(`acronyms("Live from New York, it's Saturday Night!")`);
console.log(acronyms("Live from New York, it's Saturday Night!"));

// Count Non-Spaces
// Accept a string and return the number of non-space characters found in the string. 

// For example, given "Honey pie, you are driving me crazy", return 29 (not 35).

??

// Remove Shorter Strings
// Given a string array and value (length), remove any strings shorter than the length from the array.
let arr = ["I", "study", "JavaScript"];

arr.splice(2, 0, "complex", "language");

alert( arr );