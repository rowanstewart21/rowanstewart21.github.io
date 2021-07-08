/* 
 * STRING MANIPULATION :
 *
 * 0. strings are character or text data, and can be manipulated in a couple of different
 * ways - we use these methods to alter the data contained in a string
 *
 * 1. we can manipulate strings using operators (typically the + operator to add two or 
 * more strings together)
 *
 * 2. we can also use methods specific to strings to change string data - these include 
 * push, slice, split, and are similar to array methods
 */ 
 
// 1. string manipulation with operators //

var stringOne = 'hello';
console.log(stringOne); // prints > 'hello'

stringOne = stringOne + ' world. ';
console.log(stringOne); // prints > 'hello world. '

stringOne += 'my name is rowan';
console.log(stringOne); // prints > 'hello world. my name is rowan'

/* just like the + operator with numbers, the + can be used to add two strings together.
 * in line 19, we add the original stringOne, 'hello' to ' world.' to create the string 
 * 'hello world. '
 *
 * we can also use the += operator, which adds the following string to the variable, 
 * without having to double type stringOne - it does the same thing as the code in line
 * 19, but condenses it to a single += operator
 */

// 2. string manipulation with string methods //

var myString = 'hello world'; 

console.log(myString.legnth); // prints > 11

/* the length property returns the length of the strings, or the number of characters 
 * contained within the string. above, the string 'hello world' contains 11 characters
 */
 
console.log(myString[0]); // prints > 'h'
console.log(myString[4]); // prints > 'o'
console.log(myString[myString.length - 1]); // prints > 'd'

/* we can use bracket notation (just like we do with arrays) to access specific elements
 * or characters of a string
 */

console.log(myString.slice(0, 5)); // prints > 'hello'
console.log(myString.slice(-11, -6)); // prints > 'hello'

console.log(myString.substring(6, 11)); // prints > 'world'
console.log(myString.substr(6, 5)); // prints > 'world'
console.log(myString.substr(8)); // prints > 'rld'

/* the string methods slice, substring, and substr are all very similar in that they 
 * extract a part of the original string; however, they differ slightly in inputs
 *
 * slice extracts the characters from the original string from positions x to y, indicated
 * as (x, y) in the inputs. for example, in line 52, we are extracting the characters 
 * starting at position 0 and ending at position 5, returning 'hello'. slice can also 
 * take in negative inputs that will start counting at the END of the string. in line 53,
 * we start at position 11 (from the back) and count backwards until reaching position 6,
 * giving us the same string 'hello'
 *
 * substring is very similar to slice - it also extracts characters from positions x to y
 * in the same format. in line 55, we are extracting the characters from positions 6 to
 * 11, which returns the string 'world'. the main difference between substring and slice
 * is that substring cannot take in negative inputs
 *
 * the method substr differs in the second input - while both slice and substring use 
 * from position x to position y, substr uses a starting position, x, and a length, z. 
 * in line 56, we are starting at position 6 and extracting the FOLLOWING 5 characters. 
 * if substr only has one input, it will begin at the given character and return the 
 * rest of the original string (shown in line 57)
 */
 
console.log(myString.replace('world', 'rowan')); // prints > 'hello rowan'

/* the .replace method replaces one word in a string with another - in line 81, we 
 * replace world in the original string with rowan, so our console reads 'hello rowan'.
 * the replace function, by default, replaces only the first instance of our word and is 
 * case sensitive (so myString.replace('WORLD', 'rowan') would not produce the same
 * result)
 *
 * it is important to note that replace returns a new string with the replaced content -
 * it does not alter the original string. myString is still equal to 'hello world'
 */

console.log(myString.toUpperCase()); // prints > 'HELLO WORLD'
console.log(myString.toUpperCase()); // prints > 'hello world'

/* the methods .toUpperCase and .toLowerCase both change the case of the characters in 
 * the string - 'hello world' becomes 'HELLO WORLD' and returns with .toLowerCase()
 */

console.log(myString.concat(' and rowan')); // prints > 'hello world and rowan'

/* the concat function takes myString as originally written and concatenates it with 
 * whatever is contained in the parenthesis. in this case, myString is concatenated with 
 * 'and rowan', to create the string 'hello world and rowan'
 */

console.log(myString.split(' ')); // prints > ['hello', 'world']
console.log(myString.split('')); // prints > ['h','e','l','l','o','w','o','r','l','d']

/* the string method .split creates an array from the string, split on whatever character
 * is within the parenthesis - on line 107, that would be the space in between 'hello' 
 * and 'world'. without a character argument, the string is split into individual 
 * characters (as on line 108)
 */