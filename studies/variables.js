console.log(myFaveFood); // prints > 'undefined' but doesn't show an error 
console.log(myFaveColor); // shows an error - let variables are not hoisted
console.log(myFaveFruit); // shows an error - const variables are not hoisted

/*
 * VARIABLES :
 *
 * 0. to hold things in memory during the life-cycle of a program, we can use variables. 
 * variables are named identifiers that can point to values of a particular type, like 
 * a number, string, boolean, array, object or another data-type.  variables are called
 * so because once created, we can CHANGE the value (and type of value) to which they 
 * point.
 *
 * 1. to create a variable we use the keyword, var, followed by a name (id or alias)
 * for our variable.
 *
 * 2. there are 2 phases of using variables: declaration and initialization (or 
 * assignment).
 */

// 1. declaration //

var myName;

/*
 * at the declaration phase, the variable myName is undefined because we have NOT 
 * initialized it to anything. right now, the variable exists, but it isn't assigned
 * to anything - calling it just prints undefined
 */

console.log(myName); // prints > undefined

// 2. initialization or assignment //

myName = 'rowan';
console.log(myName); // prints > 'rowan'

// 3. re-assignment //

myName = 'bob';
console.log(myName); // prints > 'bob'

// NOTE: we can assign and re-assign anything to a var - we can't do this with const //
var myVariable = 1;

myVariable = true;
console.log (myVariable); // prints > true

myVariable = "someString";
console.log(myVariable); // prints > 'someString'

/* the value of myVariable changes - if we console.log myVariable after line 44, it will
 * print true, but if we console.log it after line 47, it will print "someString" - this
 * is because the value of myVariable has been changed to "someString"
 */

// 4. let and const //

let myFavoriteNum = 21;
myFavoriteNum = 22; // this is not allowed - let and var can be reassigned

const myBirthday = '04/21/97';
myBirthday = '04/22/97'; // this is not allowed - const cannot be reassigned

console.log(myFavoriteNum, myBirthday);

/* let and const also declare variables, but have slightly different properties than the
 * keyword var. let and const are both block-scoped variables, which means that they only
 * exist within the scope where they're created. 
 *
 * the big difference between let and const is that let can be reassigned, while const
 * cannot - const is short for constant, meaning that the value does not change. let can
 * be reassigned (but is still constrained to the block in which it was created)
 */
 
if (myName === 'rowan') {
    let myLastName = 'stewart';
    console.log(myLastName);
} else {
    const myLastName = 'not stewart';
    console.log(myLastName);
}



/* console.log(myLastName); shows an error because myLastName is not defined outside of 
 * the if statement in which it was created; we could use it within the if statement, but
 * it cannot be called outside of that block
 */
 
// 5. hoisting //

var myFaveFood = 'pasta';

/* variables can be declared anywhere within a program and are 'hoisted' to the top 
 * before the program runs. when a computer runs through a program, it runs through 
 * twice - once to search for all variable and function declarations (which get "hoisted"
 * or pulled up to the top) and then again to execute the actual code. this is sort of 
 * like putting together a bookcase - you read the instructions once to figure out what 
 * tools you need (variables and functions) and then read them again to actually build 
 * the bookcase. 
 *
 * we could call the variable myFaveFood at the top of the program (see line 1) - since 
 * the variable is hoisted, the variable has already been declared before the start of 
 * the program. however, the  variable hasn't been INITIALIZED or ASSIGNED yet, so the 
 * console.log will print undefined. the assignment is on line 85 - anywhere it's called 
 * before there will be undefined (but the var will exist)
 */
 
let myFaveColor = 'purple';
const myFaveFruit = 'strawberry';

/* let and const are not hoisted - these variables myFaveColor and myFaveFruit do not 
 * exist until lines 100 and 101 where they are declared. calling them earlier in the
 * program will show an error
 */