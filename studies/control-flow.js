/* 
 * CONTROL FLOW :
 *
 * 0. control flow refers to the process that the program goes through, making decisions
 * based on inputs and information that is given. to do this, we can write if, else if, 
 * and else statements, all of which depend on a given condition or result of a logical 
 * or comparison operator (basically, by asking true or false questions, the code can
 * make decisions for us and execute certain actions based on other results)
 *
 * 1. if statements set an initial condition for the program to check 
 *
 * 2. we can add any number of following conditional else if statements to check afther 
 * the inital if statement
 * 
 * 3. the final else statement tells the program what to do if all of the given conditions 
 * are false 
 *
 * 4. switch blocks are similar to if / else if / else statements in that they also have
 * the program make decisions based on the results of conditional statements
 */ 

// 1. if statements // 

var name = 'abby';

// if (condition to meet / check) {
if (name === 'abby') {
    // code to be executed if the statement is true
    console.log('hello abby!');
} // prints > 'hello abby!'

name = 'rowan';

if (name === 'abby') {
    console.log('hello abby!');
} // doesn't print anything to the console, since name is not equal to 'abby'

/* if statements execute actions based on whether an initial condition is true or false.
 * the statement above is checking to see whether the variable name is equal to 'abby' 
 * and then printing a message to the console if it is - in this case, the name is equal
 * to abby, so the message 'hello abby!' will be printed to the console.
 *
 * the second if statement, once the name has been reassigned to 'rowan', resolves to 
 * false, so nothing is printed to the console, since the condition is not met
 */

// 2. else if statements //

name = 'abby';

// if (condition to meet / check) {
if (name === 'abby') {
    // code to be executed if the first statement is true
    console.log('hello abby!');
} else if (name === 'rowan') {
    // code to be executed if the second statement is true
    console.log('hello rowan!');
} // prints > 'hello abby!'

name = 'rowan';

if (name === 'abby') {
    console.log('hello abby!');
} else if (name === 'rowan') {
    console.log('hello rowan!');
} // prints > 'hello rowan!'

name = 'josh';

if (name === 'abby') {
    console.log('hello abby!');
} else if (name === 'rowan') {
    console.log('hello rowan!');
} // doesn't print anything to the console, since name is not equal to 'abby' or 'rowan'

/* adding an else if statement allows the code to check an additional condition - in this
 * statement, the program checks first if name is equal to abby - since it is, the 
 * message 'hello abby!' is printed to the console. since the first condition is met, the
 * second is not checked
 * 
 * since name has been changed back to 'rowan', the first statement is no longer true, so
 * the program moves on to the second conditional. the second condition is true, since
 * name is equal to 'rowan', so the second message, 'hello rowan!' is printed to the 
 * console
 *
 * in the third code block, where name is equal to 'josh', neither the first or second 
 * conditional is met. just like in the if statements, since the conditions are not met,
 * nothing is printed to the console
 */
 
// 3. else statements // 

name = 'abby';

// if (condition to meet / check) {
if (name === 'abby') {
    // code to be executed if the first statement is true
    console.log('hello abby!');
} else if (name === 'rowan') {
    // code to be executed if the second statement is true
    console.log('hello rowan!');
} else {
    // code to be executed if none of the conditionals are true
    console.log('STRANGER!!!');
}// prints > 'hello abby!'

name = 'rowan';

if (name === 'abby') {
    console.log('hello abby!');
} else if (name === 'rowan') {
    console.log('hello rowan!');
} else {
    console.log('STRANGER!!!');
} // prints > 'hello rowan!'

name = 'josh';

if (name === 'abby') {
    console.log('hello abby!');
} else if (name === 'rowan') {
    console.log('hello rowan!');
} else {
    console.log('STRANGER!!!');
} // prints > 'STRANGER!!!'

/* just like in the previous examples, the first and second if / else if loops result to
 * the same messages, 'hello abby!' and 'hello rowan!', respectively, since those two 
 * conditions are still met
 *
 * the third loop, where name is 'josh' now executes based on the 'else' condition - 
 * since neither of the two conditionals resolve to true, the program follows the 'else'
 * condition, and prints 'STRANGER!!!' to the console
 */

// 4. switch statements //

var color = 'purple';

// switch (variable to test) {
switch (color) {
    // case 'thing to test against': action if true; break; (if / else if statements)
    case 'purple': console.log('the color is purple!'); break;
    case 'green': console.log('the color is green!'); break;
    case 'gold': console.log('the color is gold!'); break;
    // default case: thing to do if none of the conditions are met (else statement)
    default: console.log('this is not a color we recognize');
} // prints > 'the color is purple!'

color = 'gold';

switch (color) {
    case 'purple': console.log('the color is purple!'); break;
    case 'green': console.log('the color is green!'); break;
    case 'gold': console.log('the color is gold!'); break;
    default: console.log('this is not a color we recognize');
} // prints > 'the color is gold!'

color = 'teal';

switch (color) {
    case 'purple': console.log('the color is purple!'); break;
    case 'green': console.log('the color is green!'); break;
    case 'gold': console.log('the color is gold!'); break;
    default: console.log('this is not a color we recognize');
} // prints > 'this is not a color we recognize'

/* switch statements function the same as if / else if / else statements, but are more
 * condensed. our cases are testing each of the values (in this case the colors of the
 * rainbow) against the variable 'color'. switch statements are called with the keyword
 * switch, followed by all of the different cases or things to test. after each of the 
 * cases, there should be some action if the case is true and a break statement (so that
 * the program doesn't continue testing later cases once it executes the first met 
 * condition)
 * 
 * in the first iteration, color is equal to purple. the code tests and meets the first
 * condition for purple. the message 'the color is purple!' is printed to the console.
 * the second iteration meets the third condition, that color is equal to 'gold', so the
 * message 'the color is gold!' gets printed to the console
 *
 * in the third iteration, the color is not one of the defined cases, so the program
 * follows the 'default' case and prints the message 'this is not a color we recognize'
 * to the console
 */