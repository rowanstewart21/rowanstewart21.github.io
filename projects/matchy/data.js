/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

var animal = {};

animal.species = 'elephant';
animal['name'] = 'ellie';
animal.noises = [];

console.log(animal);

//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

var noises = [];

noises[0] = 'trumpet';
noises.push('rumble');
noises.unshift('snort');
noises[noises.length] = 'roar';

console.log(noises.length);

console.log(noises[noises.length - 1]);

console.log(noises);

//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

animal['noises'] = noises;

animal.noises.push('cry');

console.log(animal);

/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 *      bracket notation and dot notation
 * 2. What are the different ways of accessing elements on arrays?
 *      bracket notation
 * *******************************************************************
 */

/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////

var animals = [];

animals.push(animal);

var duck = {species: 'duck', name: 'jerome', noises: ['quack', 'honk', 'sneeze', 'woosh']};
var bumblebee = {species: 'bumblebee', name: 'abby', noises: ['buzz', 'whoop']};
var cat = {species: 'cat', name: 'koi', noises: ['purr', 'hiss']}

animals.push(duck);

console.log(animals);

animals.push(bumblebee);
animals.push(cat);

console.log(animals);
console.log(animals.length);

//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

var friends = [];
var jeromeFriends = [];
var abbyFriends = [];
var koiFriends = [];

// using an array because our animals will each need a list of their friends (which 
// should be strings)

function getRandom(friendsArray) {
    var randomNumber = Math.floor(Math.random() * 3);
    var friend = animals[randomNumber].name;
    friendsArray.push(friend);

    return randomNumber;
}

getRandom(friends);
getRandom(jeromeFriends);
getRandom(abbyFriends);
getRandom(koiFriends);

console.log(friends);

animal['friends'] = friends;
duck['friends'] = jeromeFriends;
bumblebee['friends'] = abbyFriends;
cat['friends'] = koiFriends;


console.log(animals);

/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}