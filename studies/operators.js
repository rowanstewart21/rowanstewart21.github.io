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
var myOtherNumber = 3;

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
 
// 3. comparison operators //
 
console.log(1 < 2); // prints > true
console.log(42 > 43); // prints > false
console.log(6 <= 6); // prints > true
console.log(1 >= 2); // prints > false

/* comparison operators can be used to compare two values (typically numbers, but can 
 * also be used to compare strings, undefined, objects, and arrays). comparison operators
 * are considered binary, since they take in two operands and they evaluate to a boolean
 * value, either true or false. the four examples above are less than, greater than, 
 * less than or equal to, and greater than or equal to, and are evaluated just like they
 * are in math
 */

var truthy = (0 == 0); // resolves to true
var alsoTruthy = ('rowan' == 'Rowan'); // also resolves to true
var alsoAlsoTruthy = ('2' == 2); // also also resolves to true

console.log(truthy, alsoTruthy, alsoAlsoTruthy);

/* since the single '=' sign is used as the assignment operator, two (or three) '=' are
 * used to compare two values. with two '=', values are not strictly compared, meaning
 * that datatype or capital letters do not affect the comparison (for example, 'rowan'
 * is still equal to 'Rowan', and '2' is equal to 2)
 */

var truthyTwo = (0 === 0); // resolves to true
var falsyTwo = ('hello' === 'Hello'); // resolves to false
var falsyThree = ('2' === 2); // also resolves to false 

console.log(truthyTwo, falsyTwo, falsyThree);

/* three '=' signs are used to indicate strict comparison, where datatype and
 * construction must match - in the example above, 0 is strictly equal to 0 because their
 * datatype matches. however, the string 'hello' is not strictly equal to 'Hello' and '2'
 * is not strictly equal to 2.
 */

// 4. logical operators //

console.log(1 == 1 && 2 == 2); // prints > true
console.log(1 == 1 && 2 == 3); // prints > false

/* && is the AND operator, and evaluates true only if both (or all) statements resolve
 * to true - in line 123, the program will print true because both 1 == 1 and 2 == 2 are
 * true, but in line 124, the program will print false because 1 == 1 is true, but 2 == 3
 * is not. since both operands don't resolve to true, the overall statement resolves to
 * false
 */
 
console.log(1 == 1 || 2 == 2); // prints > true
console.log(1 == 1 || 2 == 3); // prints > true
console.log(1 == 2 || 2 == 3); // prints > true

/* || is the OR operator, and evaluates true if at LEAST one of the statements resolves
 * to true (meaning that if more than one statement is true, the overall statement is 
 * still true. it's or INclusive). in line 133, the statement resolves to true because
 * both statements are true. the console.log statement in line 134 also prints true 
 * since the first statement is true, even if the second is not. the third statement, 
 * however, resolves to false, since neither statement is true
 */

console.log(!(1 == 2)); // prints > true
console.log(!(1 == 1)); // prints > false

/* the ! operator (called the bang operator) reverses the truthiness of any boolean 
 * value - so a value that is true is reversed to false and vice versa. the statement
 * in line 145 resolves to true, since the bang operator reverses the fact that 1 is not
 * equal to 2. conversely, the statement in line 146 resolves to false, since the 
 * original statement resolves to true
 */

// 5. unary operators // 

/* unary operators are operators that take in a single operand - all of the following 
 * types of comparison operators only need a single argument
 */

console.log(!true); // prints > false
console.log(!false); // prints > true
console.log(!null); // prints > true

/* the bang operator is also considered unary, since it can take in only one operand. 
 * we can use boolean values directly with the ! operator to reverse their truthiness
 */
 
console.log(-21); // prints > -21

/* the - sign is also considered to be a unary operator, since it switches the value of 
 * a numerical value from positive to negative (or vice versa) and only needs a single 
 * operand
 */

console.log(typeof 'rowan'); // prints > string
console.log(typeof 21); // prints > number
console.log(typeof true); // prints > boolean
console.log(typeof ['one', 'two', 'three']); // prints > object **

/* the builtin 'typeof' function gives the type of data of a value. in the examples 
 * above, we have a string, a number, a boolean, and an array. it's important to note 
 * that typeof evaluated line 175 (the array) to an object, not an array. javascript 
 * recognizes both arrays and objects as objects under the typeof command!
 */

var name = 'rowan';
if (name) { console.log('hello ' + name) } // prints > 'hello rowan'

name = null;
if (name) { console.log('hello ' + name) } // doesn't print anything, since name is null

/* the if operator can also be used with only one operand, for example, if name exists 
 * (is not null), we want to print 'hello ' + the name to the console. in lines 183 and 
 * 184, name is defined as 'rowan', so our message is printed as 'hello rowan'. however,
 * in lines 186 and 187, the message is not printed to the console, since name does not
 * exist
 */
 
// 5. ternary operators // 

(18 / 3 == 2 * 3) ? console.log('this is the truth') : console.log ('weird math...');
// since 18 / 3 and 2 * 3 both evaluate to 6, this is true, and prints the first message

(18 / 2 == 4 * 3) ? console.log('this is the truth') : console.log ('weird math...');
// since 18 / 2 and 4 * 3 are not equal, this is false, and prints the second message

/* ternary operators are operators that take in three operands, or need three arguments
 * to evaluate. ternary operators follow the format (logical operator ? what to do if 
 * it evaluates to true : what to do if it evaluates to false). ternary operators are 
 * super useful in condensing if statements to a single line, making code more concise
 */