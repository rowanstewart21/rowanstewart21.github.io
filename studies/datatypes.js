// What is the difference between primitive/simple and complex data types?
// Primitive values are passed to a function BY COPY, complex values are BY REFERENCE. 
// What does that mean, and how are they different?

/* 
 * DATA TYPES :
 *
 * 0. there are a bunch of different datatypes that can be stored in javascript - each of
 * the datatypes stores a different type of information and can be used in different 
 * ways. the different datatypes are broken into two larger categories: simple and 
 * complex data. knowing the datatype of a variable is important because it affects 
 * the operators that can be used on the value or variable. 
 *
 * 1. there are 8 different datatypes: number, string, boolean, array, object, function, 
 * undefined, null, NaN, and infinity / -infinity. 
 *
 * 2. there are two different subcategories of datatypes: simple / primitive and complex; 
 * these datatypes differ in what they contain and how they are referenced
 * 
 * 3. some datatypes get passed by COPY while others get passed by REFERENCE - this 
 * depends on whether the value is a simple or primitive type and affects whether the
 * copy is updated when the variable is.
 */ 

// 1. datatypes //

var myNumber = 21;

/* numbers are any numerical data, either integer or floating decimal. we can use 
 * arithmetic operators to manipulate numerical data the same way we would in math 
 * (for example, myNumber + 21 would return 42). we can also use comparison and logical
 * operators with numbers, to compare and evaluate if statements.
 */

var myString = 'hello, world!';
/* strings are character data and contain letters and words. strings are contained in 
 * quotations marks. quotation marks around any other datatype will convert the data to
 * a string (for example, 42 is a number, but '42' is a string). we can use arithmetic, 
 * comparison, and logical operators on strings.
 */

var myBoolean = true;
/* boolean values are either true or false - boolean values are most frequently used 
 * when working with if statements, where the program completes one action if a statement
 * is true and a different action if the statement is false
 */

var myUndefined;
/* undefined means that the variable has not been initialized or assigned yet - the 
 * variable name may exist, but it has not been assigned a value.
 */
 
var myNull = null;
/* null values mean that the value doesn't exist or has been nullified by the programmer.
 * this means that the metaphorical "bucket" of our variable is empty. 
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
/* 
 */
