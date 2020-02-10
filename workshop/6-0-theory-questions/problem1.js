// Given the following functions, answer the questions below.

function square(x) {
    return x * x;
}

function decrement(x) {
    return x - 1;
}

function duplicateString(x) {
    return x.concat(x);
}

function reverseString(str) {
    const splitString = str.split(""); // var splitString = "hello".split("");
    const reverseArray = splitString.reverse(); // var reverseArray = ["h", "e", "l", "l", "o"].reverse();
    return reverseArray.join(""); // var joinArray = ["o", "l", "l", "e", "h"].join(""); 
}

// Expand each of the following and get the result of the expression
// Q1
square(decrement(square(decrement(3))));
//decrement is 3 - 1 = 2
//square is 2^2 = 4
//decrement is 4-1 = 3
//square is 3^2 = 0
console.log(`A1) = 3`);
// Q2
decrement(decrement(square(square(3))));
//square 3 ^ 2 = 9
//square 9 ^ 2 = 81
//decrement 81 - 1 = 80
//decrement 80 - 1 = 79
console.log(`A2) = 79`);
// Q3
duplicateString(reverseString("hello"));
//given 'hello'
//reverse 'olleh'
//duplicate 'olleholleh'
console.log (`A3) = 'olleholleh`);



// Q4
reverseString(duplicateString(duplicateString("foo")));
//given "foo"
//duplicate "foo" = "foofoo"
//suplicate "foofoo" = "foofoofoofoo"
//reverse "foofoofoofoo" = "oofoofoofoof"


