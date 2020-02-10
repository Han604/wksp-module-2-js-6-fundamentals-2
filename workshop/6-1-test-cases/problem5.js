let verifyEquals = require('../../assets/verify-equals');

// Problem 5
// ---------
// Step 1
// Write a function that accepts an array of two values and returns those two numbers. 
// - The input of the function is an array.
// - If one of the numbers is not passed, or if anything other than numbers are passed, return undefined.

function f(input) {
    console.log(typeof input + ' base input')
    console.log(input[0] + 'input0')
    let first = input[0];
    console.log(first + ' first');
    let second = input[1];
    console.log(typeof first + "typeof first");
    console.log(typeof second + "typeof second");
    if ((typeof first !== 'number') || (typeof second !== 'number')) {
        return 'this is not a number'
    }
    let mult = first * second;
    // if (mult === NaN) {
    //     return mult;
    // }
    console.log(mult)
    console.log (mult)
    
    return mult;
}

// Step 2
// We need 5 test cases. The first input is provided.
// Don't forget to test all of the question parameters

let inputs = [[2, 7], [7, 2], ['a', 'b'], ['8', '9'] ["why", 'god']];
let outputs = [14, 14, 'this is not a number', undefined, undefined];

// Step 3
// Run this file in the debugger.
// If you get the "All test passed for..." message, move on to the next exercise.

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
