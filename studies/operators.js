/* 
 * OPERATORS :
 *
 * 0. operators allow us to manipulate variables and data stored in javascript - operators
 * let us actually act on the data that we're storing. there are two ways to classify
 * operators: by what they let us do and by how many operands (values that the operators
 * act on) they require
 *
 * 1. there are six different types of operators: assignment, arithmetic, comparison, 
 * logical, unary, and ternary
 *
 */ 
 
// 1. assignment operators //
 
var myName = 'rowan';
console.log(myName); // prints > 'rowan'
 
myName = 'rowan stewart';
console.log(myName); // prints 'rowan stewart'
 
/* the simple assignment operator '=' is used to assign values to a variable. the variable
 * myName now has the value 'rowan'. the '=' operator can also be used to reassign a 
 * value to a variable, as in line 20 - where myName is reassigned to be 'rowan stewart'.
 * if it's console.logged after that point, the value will be 'rowan stewart', instead of
 * 'rowan', as it was originally assigned
 */
 
var x;
var y;

x = y = 5;

console.log(x); // prints > 5
console.log(y); // prints > 5

/* we can also chain assignment operators to set multiple values equal to each other and
 * assign them a value (for example, we set x equal to both y and 5)
 */
 
// 2. arithmetic operators //

console.log(3 + 5); // prints > 8
console.log(8 - 6); // prints > 2
console.log(2 * 4); // prints > 8
console.log(9 / 3); // prints > 3

var myNumber = 21;
var myOtherNumber = 3

console.log(myNumber + myOtherNumber); // prints > 24
console.log(myNumber - myOtherNumber); // prints > 18
console.log(myNumber * myOtherNumber); // prints > 63
console.log(myNumber / myOtherNumber); // prints > 7

myNumber = myNumber / 3;

console.log(myNumber); // prints > 7

var myNewNumber = myNumber + 18;

console.log(myNewNumber); // prints > 25 since the value of myNumber was updated to 7

/* arithmetic operators perform arithmetic on numbers (and can sometimes be used on 
 * strings). we can do this with both hardcoded numbers and variables. the first four 
 * console.log statements show the arithmetic actions with hardcoded numbers, while the 
 * second four show the same arithmetic statements using two variables: we have myNumber,
 * which is set equal to 21 using the assignment operator '=' and myOtherNumber which is 
 * set to 3. the four console.log statements below show the two variables being 
 * manipulated with addition, subtraction, multiplication, and division 
 *
 * we can also use arithmetic operations to adjust the values of variables or to find 
 * values of new variables, as shown in lines 56 - 58
 */
 
console.log(myNumber % 2); // prints > 1
 
/* the modulo operator '%' calculates the remainder of a division - for example, myNumber
 * modulo 2, or 21 % 2 returns 1 because 21 / 2 leaves a remainder of 1. this is most 
 * useful in determining multiples of a number (especially even / odd). we can combine 
 * the modulo operator with logical operators to determine if one number is a multiple 
 * of another (for example, if(21 % 3 === 0) lets us know that 21 is a multiple of 3 
 * because the statement returns true)
 */