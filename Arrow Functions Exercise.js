console.log('Arrow Functions exercise');
/*
ES2015 Arrow Functions Shorthand
Refactor the following code to use two arrow functions.
Turn it into a one-liner.
*/
const exampleArray = [1, 2, 3, 4, 5, 6];
console.log(exampleArray);

/* ---------Traditional function declaration------- */

// function double(arr) {
//     return arr.map(function(val) {
//       return val * 2;
//     });
// };
// console.log(double(exampleArray));

/* ----Function expression using arrow functions.---- */

// const double = (array) => {
//     return array.map((val) => {
//         return val * 2;
//     })
// };
// console.log(double(exampleArray));

/* ----------As a one-liner---------*/
const double = (array) => array.map((val) => val * 2);
console.log(double(exampleArray));


/* 
Refactor the following function to use arrow functions:
Replace ALL functions with arrow functions:
*/

/* Traditional function declaration */
// function squareAndFindEvens(numbers){
//     var squares = numbers.map(function(num){
//       return num ** 2;
//     });
//     var evens = squares.filter(function(square){
//       return square % 2 === 0;
//     });
//     return evens;
// };
// console.log(squareAndFindEvens(exampleArray));

/* ----Function expression using arrow functions.---- */
// function squareAndFindEvens(numbers){
//     var squares = numbers.map((num)=> {
//       return num ** 2;
//     });
//     var evens = squares.filter((square) => {
//       return square % 2 === 0;
//     });
//     return evens;
// };

// console.log(squareAndFindEvens(exampleArray));

/* ----------As a one-liner---------*/
const squareAndFindEvens = (numbers) => numbers.map((num) => num ** 2).filter((square) => square % 2 === 0)
console.log(squareAndFindEvens(exampleArray));