let verifyEquals = require('../../assets/verify-equals');

// Problem 14
// ----------
// Make this function return the input string wrapped to 40 characters per line. 
// This means you'll have to insert a newline \n character after every 40 characters in the input string. 
// If the next character after a cut is a space, then do not display it. 

// For example:
// with this input:
//      "Lorem ipsumos dolor sit amet consectetur adipisicing elit. Magni quisquam"

// the output would be:
    //  Lorem ipsumos dolor sit amet consectetur
    //  adipisicing elit. Magni quisquam"

// instead of:
//      Lorem ipsumos dolor sit amet consectetur
//       adipisicing elit. Magni quisquam

// even though there is a space before the a in adipisicing

//can i split everything into single character strings, count them and then create a function to splice an \n
//with an if statement to see if we can check if the next string is an '' so we can remove() it?????

function f(str) {
  let charCount = 0;
  arrayOfSingleCharacters = str.split('');
  for (i = 0; i < arrayOfSingleCharacters.length; i++) {
    if (charCount === 40) {
      charCount = 0;
      arrayOfSingleCharacters.splice(i, 0, '\n')
    }
    if ((i + 1) === ' ') {
      arrayOfSingleCharacters.splice(i + 1, 1);
    }
    charCount += 1;
    console.log(charCount);
    console.log(arrayOfSingleCharacters[i])
  }
  return arrayOfSingleCharacters.join('');
}

console.log(f("Lorem ipsumos dolor sit amet consectetur adipisicing elit. Magni quisquam"))

// Test cases
let inputs = [];
let outputs = [];

// STOP -----------------------------------------------------------------
// No code changes below. This is the actual test that will run your test cases and validate your function.
function runTest(i) {
  if (i >= inputs.length) throw new Error('You do not have enough test cases');
  let expected = outputs[i];
  let actual = f(inputs[i]);
  verifyEquals(expected, actual);
}

runTest(0);
runTest(1);
runTest(2);
runTest(3);
runTest(4);

console.log('All tests passed for ' + __filename);
