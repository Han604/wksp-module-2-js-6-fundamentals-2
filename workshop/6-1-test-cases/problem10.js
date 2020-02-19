let verifyEquals = require('../../assets/verify-equals');

// Problem 10
// ----------
// Make this function return the input string, capitalized. You must use a for loop. For example:
// f("hello world"); // Hello World
// f("ALL YOUR BASE ARE BELONG"); // All Your Base Are Belong

// HINT:
//    - Use a for loop to capitalize the words one by one
//    - Use the toUpperCase string method

function f(str) {
  //split a string into multiple items in an array
  const strArray = str.split(' ');
  let tempArray = []
  //for loop to check to go through the string
    for (i=0; i < strArray.length; i++) {
      const tempString = strArray[i].charAt(0).toUpperCase() + strArray[i].slice(1).toLowerCase();
      tempArray.push(tempString);
  }
  return tempArray.join(' ');
}

// Test cases
let inputs = ['ALL YOUR BASE', 'I don\'t like this planet', 'where? here?', 'test', 'TEST'];
let outputs = ['All Your Base', 'I Don\'t Like This Planet', 'Where? Here?', 'Test', 'Test'];

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
