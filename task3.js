// Given string
// var str = "education";
var str = "javascript";

// Iterate through each character in the string
for (var i = 0; i < str.length; i++) {
  var char = str[i]; // Current character

 
  if (char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u') {
    
    console.log("The string contains all vowels.");
    break;
}
else {
    console.log("The string does not contain all vowels.");
     break;
  }
  

 }

