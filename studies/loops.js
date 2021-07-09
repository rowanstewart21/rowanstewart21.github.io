/* 
 * LOOPS : 
 *
 * 0. loops allow us to repeat a certain block of code a set number of times - this is
 * really helpful in shortening code: instead of retyping the block however many times 
 * we want it to run, we're able to define a loop to automatically repeat a singly-typed
 * block of code. there are three types of loops, for loops, for in loops, and while 
 * loops
 *
 * 1. for loops let us iterate a block of code a defined number of times, starting at 
 * some number, ending at some number, and increasing by some number each time - these 
 * are most useful in iterating over arrays or repeating code a specific number of times
 *
 * 2. for in loops let us interate a block of code for each element or key in an object,
 * for x in object lets us perform a block of code for specific keys in an object 
 * 
 * 3. while loops are similar to for loops that they run until a certain condition is met
 * and use the syntax while (condition) { code to be executed }. they're shorter-hand 
 * than for loops
 *
 * 4. we can create loops that work through both forward and backward through a set of 
 * numbers or over an array
 */ 

// 1. for loops //

// for (start definition; stop condition; increment step) {
for (var i = 1; i <= 10; i++) {
    // code to be executed each time the program loops
    console.log(i);
} // prints > 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 to separate lines on the console

/* for loops, at their simplest, start counting at some number, move through a set of 
 * numbers (in the case above, from 0 to 10) and execute some code until that condition
 * is met. for loop calls have three arguments: the first defines the starting point for
 * the loop. in this case, we want to start counting at 1, so the variable i is created
 * and set equal to 1. the next argument is the stop condition. we want to count until
 * reaching 10, so we're going to stop when i reaches 10. the third and final condition
 * is the increment by which i is going to increase (or decrease). in order to print the
 * numbers 1 - 10, we want i to increase by one each time we iterate over our code, so 
 * i++ lets the program know that i will increase by 1
 *
 * the code to be executed each iteration goes into {curly brackets} beneath the initial
 * for call - this is the code that the program will run each time it loops
 */

var myArray = [];

for (var i = 1; i < 10; i += 2) {
    myArray.push(i);
}

console.log(myArray); // prints > [1, 3, 5, 7, 9]

/* similar to the first example, this for statement starts at one and stops when i 
 * reaches 10; however, this loop increments by 2 each time, running on 1, 3, 5, 7, 9 
 * instead of 1, 2, 3, 4, 5, 6, 7, 8, 9, and 10. this loop is also pushing each i-value
 * into an array, myArray, rather than directly printing the number to the console
 */

for (var i = 10; i > 0; i--) {
    console.log(i);
} // prints > 10, 9, 8, 7, 6, 5, 4, 3, 2, 1 to separate lines on the console

/* we can also use arrays to iterate backwards or countdown from a number - this is 
 * indicated in that increment condition (the third argument). just like increasing
 * by one can be written as i++, decreasing by one can be written as i--
 */

var fooBarArray = [];

for (var i = 1; i <= 15; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        fooBarArray.push('foobar');
    } else if (i % 3 === 0) {
        fooBarArray.push('foo');
    } else if (i % 5 === 0) {
        fooBarArray.push('bar');
    } else {
        fooBarArray.push(i);
    }
} 

console.log(fooBarArray);
// prints > [1,2,'foo',4,'bar','foo',7,8,'foo','bar',11,'foo',13,14,'foobar']

/* we can create more complex for loops containing if / else if / else statements, 
 * conditionals, and array methods. the program above will create an empty array, 
 * fooBarArray, and then from 1 to 15 will count, replacing multiples of 3 with the word
 * 'foo', multiples of 5 with the word 'bar', and multiples of 3 and 5 with the word 
 * 'foobar'
 */

var friends = ['abby', 'josh', 'maggie', 'maria', 'aryn', 'david'];

for (var i = 0; i < friends.length; i++) {
    friends[i] = friends[i].charAt(0).toUpperCase() + friends[i].slice(1);
}

console.log(friends); // prints > ['Abby', 'Josh', 'Maggie', 'Maria', 'Aryn', 'David']

/* we can use for loops to iterate over arrays - in the example above, we take each 
 * value in the array friends and proper case their names (using the charAt and slice
 * string methods). using the [bracket notation] for friends[i] accesses each element 
 * of the array, as i counts from 0 (the first index) to the length of friends (reaching
 * the last index)
 */
 
var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
var backwardAlphabet = [];

for (var i = alphabet.length - 1; i >= 0; i--) {
    backwardAlphabet.push(alphabet[i]);
} 

console.log(backwardAlphabet); // prints > ['g', 'f', 'e', 'd', 'c', 'b', 'a']

/* we can also use for loops to iterate backward over arrays, starting from the length
 * of the array minus one (the last index) until we hit 0 (the first index). this 
 * example adds each letter to the array backwardAlphabet, starting from the end
 */
 
// 2. for in loops //

var person = {name: 'rowan', age: 24, collegeGrad: true, job: 'math teacher'};
var characteristics = [];

// for (var key in object) {
for (var key in person) {
    // code to be executed for each key in the object
    characteristics.push(person[key]);
} // prints > ['rowan', 24, true, 'math teacher']

/* for in loops let us iterate a block of code for each key in an object. for example, 
 * the object above has four keys: name, age, collegeGrad, and job. the block of code
 * characteristics.push(person[key]) pushes the characteristics of our person object 
 * into a new array called characteristics 
 */
 
// a bad example
var personTwo = {name: 'rowan', age: 24, collegeGrad: true, job: 'math teacher'};
var characteristicsTwo = [];

for (var key in personTwo) {
    characteristicsTwo.push(person.key);
} // prints nothing, since there is no key in person actually called 'key'!

/* NOTE: it's important to use [bracket notation] when referencing the keys of the 
 * object - if we use dot notation (person.key), the iteration is going to search for 
 * a literal key called key because (even though it's not 'quoted' as a string), 
 * dot notation reads as a string and will literally search for 'key' rather than 
 * looping through all keys in an object
 */

// 3. while loops //

// start condition 
var num = 0;

// while (end condition) {
while (num < 10) {
    // code to be executed while num is less than 10
    console.log(num);
    // increasing num by 1 each time the code runs
    num++;
} // prints > 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 to separate lines on the console

/* while loops are very similar to for loops in that we have a start condition or 
 * declaration (on line 157), a while condition (so a condition that breaks the loop
 * once its no longer true, in line 160), and an increment statement (in line 164). 
 * this while loop, like one of the first for loops, is counting up to 10 and 
 * increasing the variable num by one each time
 */
 
var date = 10;

while (date > 0) {
    console.log(date);
    date--;
} // prints 10, 9, 8, 7, 6, 5, 4, 3, 2, 1 to separate lines on the console

/* we can also use while loops to iterate backwards, just like we did with for loops 
 * above. we use date-- instead of date ++ to indicate that we're counting down instead
 * of up
 */
 
// a bad example
var number = 0;

while (number < 10) {
    console.log(number);
} // prints infinite 0's to the console until the program is killed 

/* NOTE: it's easy to forget the increment statement in a while loop - it's super 
 * important to include an increment statement; otherwise, the code will continue to 
 * run infinitely since the variable (in this case number) is never being updated
 */