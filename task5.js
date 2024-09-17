// Given string
var str = "hello world, welcome to coding!";

// Capitalize the first letter of each word
var capitalizedStr = str.split(' ') // Split the string into an array of words
  .map(function(word) { // Map over each word
    return word.charAt(0).toUpperCase() + word.slice(1); // Capitalize the first letter of each word
  })
  .join(' '); // Join the array back into a single string

// Output the result
console.log(capitalizedStr);
