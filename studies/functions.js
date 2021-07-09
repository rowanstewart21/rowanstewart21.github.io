/* 
 * FUNCTIONS : 
 *
 * 0. functions are repeatable blocks of code that are saved (typically with a 
 * descriptive name) and called to be executed throughout the code. functinos are like 
 * lists of instructions that we can call at any point in the code. they save us time 
 * in repeatedly typing out processes that we use frequently in a program
 *
 * 1. there are two steps to using a function: defining / declaring (creating the 
 * function) and calling / executing / invoking (actually using the function)
 
 * 2. functions have both parameters and arguments - arguments are values passed into a
 * function call that are used throughout the function to produce some result (these are
 * the inputs to the function). parameters are variables that are used within the code 
 * and are listed as part of the function definition
 *
 * 3. we can also use 'anonymous functions' - these are functions saved into variables
 * rather than written as function declarations - we can call these functions by calling
 * the variable name, but there is no specific name between the function call and the 
 * parameter parentheses in the declaration
 *
 * 4. to declare named functions, we use the keyword function, followed by the name of 
 * the function, the parameters that the function needs to execute, and the code block
 * to be executed
 * 
 * 5. we can specify inputs and outputs for our functions by including them in the 
 * parentheses immediately following the function name (inputs) and creating a return 
 * statement at the end of our inner code block (outputs)
 * 
 * 6. variables created within functions are limited to specific scopes - the code inside
 * of the function can see out, to variables created outside of the function code block, 
 * but code outside cannot see into a function for variables, unless that variable is 
 * returned or put out of the function
 */ 
 
// 1. function declaration // 

var myNumber = 21;
myNumber = myNumber + 21; 

console.log(myNumber); // prints > 42

/* functions are really useful when we have a block of code that we know we're going to 
 * want to repeat for whatever reason. for example, if we have a list of dates and need
 * to know what day will be 21 days after the given date, we can write a function for 
 * adding 21 to the date rather than rewriting the above proces each time
 */

// function nameOfFunction(parameters needed) {
function addTwentyOne(x) {
    // code to be executed
    return x + 21;
}

console.log(addTwentyOne(4)); // prints > 25
console.log(addTwentyOne(18)); // prints > 39

console.log(addTwentyOne(myNumber)); // prints > 63

/* now, instead of having to redo the first process each time, we can compute +21 with 
 * a single line of code. we can pass both numbers and variables into the function as 
 * arguments
 */

function searchThrough(array, value) {
  var allValue = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i] === value) {
      allValue.push(array[i]);
    }
  }

  return allValue;
}

var myArray = ['rowan', 'a', 'rowan', 'b', 'c', 'rowan'];

console.log(searchThrough(myArray, 'rowan'));

/* we can also create functions using for loops and if statements - just like we write 
 * for loops to iterate over an array or if statements to make decisions within our 
 * code, we can put those actions into a function statement to be called repeatedly
 *
 * the function searchThrough takes in two arguments, an array and a search term. we 
 * then iterate over the array looking for our search term - each time the search term
 * appears in the array, we add it to the new array allValue (an array made up of just
 * our search term, however many times it appears in the original array)
 */

// 2. function calls // 

addTwentyOne(15); // returns > 36

var friends = ['abby', 'josh', 'maggie', 'abby', 'maria', 'aryn', 'david', 'abby'];

searchThrough(friends, 'abby'); // returns > ['abby', 'abby', 'abby']

/* to call a function, we use the function name and enter any arguments that we need to
 * call the function. in the example above, we're calling both the addTwentyOne 
 * function with the number 15 (which returns 36) and the searchThrough function with 
 * the array friends and the search term 'abby' (which returns the array containing 
 * 'abby' three times)
 */

// 3. parameters and arguments // 

// greeting and name are parameters 
function sayMyName(greeting, name) {
    return `${greeting} ${name}!`;
}

// 'hello' and 'rowan' are arguments 
console.log(sayMyName('hello', 'rowan')); // prints 'hello rowan!'

/* parameters and arguments are sometimes used interchangably to refer to the values 
 * passed into a function. however, parameters specifically refers to the variables 
 * that are used in a function definition and are used as placeholders for the 
 * arguments that need to be passed in to a function for the function to run; arguments
 * are the actual values that we place into a function CALL that are used in running 
 * the function's code
 *
 * NOTE: by using `back ticks` instead of 'quotation marks', we can put variables into a
 * string without the + operator - instead, we surround variables with ${variable} a 
 * dollar sign and curly braces
 */

// 4. named vs anonymous functions //

function addFifteen(x) {
  return x + 15;
}

const addSixteen = function(x) {
  return x + 16;
};

addFifteen(4); // returns 19
addSixteen(3); // returns 19

/* there are two ways to create functions - the first is using the function call and 
 * syntax using the keyword function and formal declaration. the second is to define
 * functions as variables. these are both named functions, since they have names to be
 * called again somewhere else in the program
 */

function alteredString(string, alteration) {
  console.log(alteration(string));
}

alteredString('hello world!', function(string) {return string.toUpperCase()});
// returns 'HELLO WORLD!'

/* we can also sometimes have functions that take in other functions, like in the 
 * function alteredString above - since we don't really need the function again outside
 * of alteredString, we can create an anonymous or unnamed function. in line 150 above, 
 * we're taking the function alteredString and passing in a string to alter and some 
 * function to alter the string. in this case, we're just capitalizing the string, so
 * we can create the capitalization function within the function call, with the function
 * keyword, the parameters, and the return statement, but no name! we cannot call this 
 * function again later, since it doesn't have a name to call
 *
 * unnamed functions are used most inside of other function calls and let us create 
 * a code block to execute without creating a named function
 */
 
// 5. inputs and outputs //

function myGreeting(greeting, name) {
  return `${greeting} ${name}!`;
}

myGreeting('good morning', 'rowan'); // returns 'good morning rowan!'

/* functions typically take inputs and create outputs - just like functions do in math. 
 * we put something into our function and then get something out of those functions, 
 * depending on that input. 
 *
 * in the function myGreeting above, we have two parameters, a greeting and a name - in
 * this function call, our inputs are 'good morning' and 'rowan' - our function then 
 * outputs 'good morning rowan!'. if we changed the input to 'good afternoon' and 'abby',
 * our output would change to 'good afternoon abby!'
 */
 
// 6. scope //

var myName = 'rowan';

function checkID(name) {
  let greeting = '';
  
  if (name === myName) {
    greeting = 'hello rowan!';
  } else {
    greeting = 'hmmm... who are you?';
  }

  return greeting;
}

checkID('abby'); // returns 'hmm... who are you?'

// console.log(greeting); shows an error, variable greeting doesn't exist 

/* scope of variables is really important for what can and cannot be used inside and 
 * outside of functions. in the example above, the variable myName is defined in the 
 * global scope, which means that it's available anywhere - we can reference the 
 * variable myName within the function definition. 
 *
 * the opposite isn't true - the variable greeting is defined within the function's 
 * scope, and is only available within the function itself. we can return the greeting, 
 * but outside of the function, it doesn't exist. line 202 shows that when we try to 
 * console.log the greeting, the variable greeting doesn't exist in the global scope
 */