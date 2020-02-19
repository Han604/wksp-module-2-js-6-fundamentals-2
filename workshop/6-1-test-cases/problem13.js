let verifyEquals = require('../../assets/verify-equals');

// Problem 13
// ----------
// Make this function return true if the input string is a palindrome,
// and false otherwise.
// A palindrome is a string that is the same if you reverse it.
// RADAR -> Yes
// JAVASCRIPT -> No
// can i do an index of first letter and index of the last letter?
// can i do index[i] && string.length - i === true? 

function f(str) {
    let palindromeCheck = false;
    for (i = 0; i < str.length; i++) {
        console.log (str[i])
        console.log (str[str.length - 1 - i])
        if (str[i] === str[str.length - i - 1]) {
            palindromeCheck = true;
        } else {
            return false;
        }
    }
    return palindromeCheck;
}

// Test cases
let inputs = ['lol', 'tattarrattat', 'blue', 'colic', 't\'a\'t\'a\'t'];
let outputs = [true, true, false, false, true];

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
