/* 
 * DATA TYPES :
 *
 * 0. there are a bunch of different datatypes that can be stored in javascript - each of
 * the datatypes stores a different type of information and can be used in different 
 * ways. the different datatypes are broken into two larger categories: simple and 
 * complex data. knowing the datatype of a variable is important because it affects 
 * the operators that can be used on the value or variable
 *
 * 1. there are 8 different datatypes: number, string, boolean, array, object, function, 
 * undefined, null, NaN, and infinity / -infinity
 *
 * 2. there are two different subcategories of datatypes: simple / primitive and complex; 
 * these datatypes differ in what they contain and how they are referenced
 * 
 * 3. some datatypes get passed by COPY while others get passed by REFERENCE - this 
 * depends on whether the value is a simple or primitive type and affects whether the
 * copy is updated when the variable is
 */ 

// 1. datatypes //

var myNumber = 21;
/* numbers are any numerical data, either integer or floating decimal. we can use 
 * arithmetic operators to manipulate numerical data the same way we would in math 
 * (for example, myNumber + 21 would return 42). we can also use comparison and logical
 * operators with numbers, to compare and evaluate if statements
 */

var myString = 'hello, world!';
/* strings are character data and contain letters and words. strings are contained in 
 * quotations marks. quotation marks around any other datatype will convert the data to
 * a string (for example, 42 is a number, but '42' is a string). we can use arithmetic, 
 * comparison, and logical operators on strings
 */

var myBoolean = true;
/* boolean values are either true or false - boolean values are most frequently used 
 * when working with if statements, where the program completes one action if a statement
 * is true and a different action if the statement is false
 */

var myUndefined;
/* undefined means that the variable has not been initialized or assigned yet - the 
 * variable name may exist, but it has not been assigned a value
 */
 
var myNull = null;
/* null values mean that the value doesn't exist or has been nullified by the programmer.
 * this means that the metaphorical "bucket" of our variable is empty
 */
 
var myNaN = 12/0;
/* NaN is a datatype that stands for not a number and is typically the result of invalid
 * mathematical operations (like dividing by 0, in myNaN, or operations with infinity).
 *
 * the typeOf function will return 'number' for NaN, but there is no numerical value 
 * attached to NaN. we can use the built-in function isNaN() to check if a value is a
 * NaN value
 */
 
var myInfinity = Infinity;
var myNegativeInfinity = -Infinity;
/* the datatype infinity can be used to represent positive and negative infinity - the 
 * computer uses infinity to represent any number greater (or less than in the negative
 * case) 1.797693134862315 E+308, which is the limit of floating point decimal numbers
 */

var myArray = ['rowan', 24, true];
/* arrays are like lists of other values - they can contain any of the simple datatypes
 * within their list. arrays are created using [square brackets] and commas between 
 * values. we can use several built-in methods with arrays, such as push, unshift, pop,
 * etc. we use these with dot notation (for example, to push something to the end of 
 * myArray, we would use myArray.push('math teacher')). our new array would be 
 * ['rowan', 24, true, 'math teacher']
 *
 * we access elements in an array using bracket notation. for example, to access the
 * first element in the array myArray, we would use myArray[0]. we can access the last
 * element of an array using the same notation, but replacing 0 with array.length - 1. 
 * this lets us access the last index without hardcoding (myArray[array.length - 1])
 */

var myObject = {name: 'rowan', age: 24, collegeGrad: true, job: 'math teacher'};
/* objects are similar to arrays in that they hold a collection of values, but objects
 * are sets of key-value pairs, meaning that they have an attribute or key that is 
 * assigned a value. for example, in myObject, the attribute or key name is assigned 
 * a value 'rowan'. we could create another object, 'abby' with the same keys to store
 * the same information about Abby : abby = {name: 'abby', age: 24, collegeGrad: true, 
 * job: 'TU advancement program coordinator'}
 *
 * objects are created using {curly brackets} and commas between key:value pairs. we 
 * can use dot notation to add new key:value pairs to objects (for example, to add 
 * favoriteAnimal to myObject, we would use myObject.favoriteAnimal = 'elephant' - 
 * our new object would read {name: 'rowan', age: 24, collegeGrad: true, job: 'math 
 * teacher', favoriteAnimal = 'elephant'};
 */
 
var myFunction = function(x){
      return x + 21
   }
/* functions are repeatable blocks of code that can be called with or without inputs, 
 * or parameters. functions can be defined as variables (like myFunction above) or 
 * with the keyword function (just like variables are defined with the keyword var)
 * 
 * to define a function, we start with the keyword function followed by the name of
 * the function. normally, the name should be something descriptive of what the function
 * is doing when called. then, we add any parameters of the function in parenthesis (in 
 * myFunction, the parameter would be a number, x). the block of code we want to execute
 * with the function is contained within {curly brackets} - in myFunction, we're adding
 * 21 to x, and returning that new value
 * 
 * to call a function, we just write the name of the function and add any parameters or
 * arguments into the parentheses. we can call myFunction by writing myFunction(5) to 
 * get the sum of 5 and 21
 *
 * functions (like variables) are hoisted to the top of a program, so the function can
 * be called anywhere in the code, regardless of where the function definition appears
 */

// 2. simple / primitive vs complex data types //

/* the ten datatypes above break down into two subcategories - simple or primitive data 
 * and complex datatypes. the most basic difference between the two is that simple data
 * contain values directly, while complex data contain other pieces of data
 *
 * simple datatypes include numbers, strings, booleans, undefined, null, NaN, and 
 * infinity / -infinity. these datatypes all store information directly. a number 
 * datatype just stores a number, a boolean just contains either true or false. simple
 * datatypes are finite in size - they only contain one piece of information
 *
 * complex datatypes serve as larger containers for other datatypes - these include 
 * arrays, objects, and functions. complex datatypes are infinite in size, since they 
 * contain references to other values and variables. for example, our array from above: 
 * ['rowan', 24, true, 'math teacher']; this array contains two strings, a number, and 
 * a boolean - all contained within one array. we could continue adding to the array, 
 * so they are not finite in space or size the way primitive datatypes are. because they 
 * are infinite in size, complex datatypes are actually storing references to other
 * values, rather than values themselves (since the size is infinite, the program cannot
 * contain the data within the 8 bytes that can be used to store variables)
 */
 
 // 3. copy by VALUE vs copy by REFERENCE // 
 
var myName = 'rowan';
var a = myName;

myName = 'not rowan';
 
console.log(myName); // prints > 'not rowan'
console.log(a); // prints > 'rowan'

 /* simple data types are copied by VALUE. this means that the value is directly copied
  * from one variable to the other, and remains unchanged when the value of the original
  * variable changes. for example, above, the variable myName is created with the value
  * 'rowan' - the variable a is then created to equal the VALUE of myName. the string 
  * 'rowan' gets passed to the variable a. at this point, the value of both variables
  * is the same - 'rowan'. on line 148, we change the value of myName to be equal to 
  * 'not rowan' - the value of myName is changed and prints as 'not rowan' to the 
  * console, however, the value of a remains the same. since the value was strictly 
  * copied over to a, a no longer holds any reference to myName, and does not change 
  * when myName is changed. this is because simple datatypes actually hold values, while
  * complex datatypes contain references
  */
  
var aboutMe = ['rowan', 24, true, 'math teacher'];
var rowan = aboutMe;

aboutMe[4] = 'elephant';
rowan[rowan.length] = 'wine';

console.log(aboutMe); // prints > ['rowan', 24, true, 'math teacher', 'elephant', 'wine']
console.log(rowan); // prints > ['rowan', 24, true, 'math teacher', 'elephant', 'wine']

/* complex datatypes are copied by REFERENCE - since arrays and objects do not actually 
 * contain values, but contain references, it makes sense that they are also copied by 
 * reference. this means that when the contents of aboutMe are changed, the contents of
 * rowan change too - they're both referencing the same array
 *
 * we created the array aboutMe (the same myArray from above) and set rowan equal to it -
 * when we add an element at index 4 of aboutMe, 'elephant', that same element gets
 * added to rowan too, since rowan still contains the reference to aboutMe. the same 
 * happens when we add 'wine' to the end of the rowan array. it also gets passed into 
 * aboutMe, since the two are referencing the same values
 */