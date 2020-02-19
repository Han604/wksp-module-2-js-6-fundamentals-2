let verifyEquals = require('../../assets/verify-equals');

// Problem 11
// ----------
// Make this function return the sum of all the numbers in the input array.
// If any element in the array is not a number, skip it. If the array is empty, return zero.

function f(arr) {
    let sum = 0;
    console.log(arr.length)
    for (i = 0; i < arr.length; i++) {
        if (typeof arr[i] !== "number") {
            arr[i] = 0
        }
        sum += arr[i]
    }
    return sum
}

// Test cases
let inputs = [['b',null,undefined,true,5,6], [1,2,3,4,5,6], ['a','b','c'], [-1,-2,-3], ['cat', 3, 'hat', 8]];
let outputs = [11, 21, 0, -6, 11];

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
