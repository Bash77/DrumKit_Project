var name = "What is your name?";
//capitalize the first letter of thier name.
 // Isolate the first Char.
var firstChar = n.slice(0,n.length);
// turn the Char to upprCase
var upperCaseFirsChar = firstChar.toUpperCase();
//Isolate  the rest of name
var restOfName = n.slice(1,n.length);
//concatenate rest of name with the first Char.
var capitaliseName = firstChar + upperCaseFirsChar;
//alert to the name to user.
alert("Hello", + capitaliseName);