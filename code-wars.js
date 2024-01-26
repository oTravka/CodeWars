/*Basic Training: Add item to an Array
______________________________________
DESCRIPTION:
Add the value "codewars" to the websites array.
After your code executes the websites array should == ["codewars"]

The websites array has already been defined for you using the following code:

var websites = [];*/

// SOLUTION:
var websites = [];
websites.push("codewars");

/*Removing Elements
__________________________
DESCRIPTION:
Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

Example:
["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

None of the arrays will be empty, so you don't have to worry about that!*/


// SOLUTION:

function removeEveryOther(arr){
let arrLenght = arr.length;
  
for (let i = 1; i < arr.length; i = i+1)
{
  console.log(arr[i], i);
  arr.splice(i, 1);
  }
  return arr;
}

/*Is this my tail?
_______________________
DESCRIPTION:
Some new animals have arrived at the zoo. The zoo keeper is concerned that perhaps the animals do not have the right tails. To help her, you must correct the broken function to make sure that the second argument (tail), is the same as the last letter of the first argument (body) - otherwise the tail wouldn't fit!

If the tail is right return true, else return false.

The arguments will always be non empty strings, and normal letters.*/

// SOLUTION:

function correctTail(body, tail){
  let sub = body[body.length -1];
  if (sub === tail)
    return true
      else {
        return false}};


/*Return Negative
___________________________________
DESCRIPTION:
In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

Examples
makeNegative(1);    // return -1
makeNegative(-5);   // return -5
makeNegative(0);    // return 0
makeNegative(0.12); // return -0.12
Notes
The number can be negative already, in which case no change is required.
Zero (0) is not checked for any specific sign. Negative zeros make no mathematical sense.*/

// SOLUTION:

function makeNegative(num){
  
  if (num <= 0){
    return num;
    
  } else {
      return num * -1;;
  };
};


/*Get the mean of an array
___________________________________
DESCRIPTION:
It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.

Return the average of the given array rounded down to its nearest integer.

The array will never be empty.*/

// SOLUTION:
function getAverage(marks){
  let number = marks.reduce((a, b) => (a + b)) / marks.length;
  let roundedNumber = Math.floor(number);
  return roundedNumber
};

/*Mr. Freeze
____________________
DESCRIPTION:
There is an object/class already created called MrFreeze. 
Mark this object as frozen so that no other changes can be made to it.*/

// SOLUTION:
Object.freeze(MrFreeze);

/*Basic subclasses - Adam and Eve
_________________________________
DESCRIPTION:
According to the creation myths of the Abrahamic religions, Adam and Eve were the first Humans to wander the Earth.

You have to do God's job. The creation method must return an array of length 2 containing objects (representing Adam and Eve). 
The first object in the array should be an instance of the class Man. 
The second should be an instance of the class Woman. 
Both objects have to be subclasses of Human. 
Your job is to implement the Human, Man and Woman classes.*/

// SOLUTION:
class God{
  /**
   * @returns Human[]
   */
    static create(){
    const Adam = new Man();
    const Eva = new Woman();
    return [Adam, Eva]
      }
    }
      class Human{
        constructor(){};
      };
        
        class Man extends Human{
           constructor(){
             super();
           };
        };
        class Woman extends Human{
          constructor(){
            super();
          };
        };

  /*Sleigh Authentication
  ____________________________
  DESCRIPTION:
  Christmas is coming and many people dreamed of having a ride with Santa's sleigh. But, of course, only Santa himself is allowed to use this wonderful transportation. And in order to make sure, that only he can board the sleigh, there's an authentication mechanism.

Your task is to implement the authenticate() method of the sleigh, which takes the name of the person, who wants to board the sleigh and a secret password. If, and only if, the name equals "Santa Claus" and the password is "Ho Ho Ho!" (yes, even Santa has a secret password with uppercase and lowercase letters and special characters :D), the return value must be true. Otherwise it should return false.

Examples:

var sleigh = new Sleigh();
sleigh.authenticate("Santa Claus", "Ho Ho Ho!"); // must return TRUE

sleigh.authenticate("Santa", "Ho Ho Ho!"); // must return FALSE
sleigh.authenticate("Santa Claus", "Ho Ho!"); // must return FALSE
sleigh.authenticate("jhoffner", "CodeWars"); // Nope, even Jake is not allowed to use the sleigh ;) */

// SOLUTION:
function Sleigh() {}

Sleigh.prototype.authenticate = function(name, password) {
  let login = "Santa Claus";
  let santaPassword = "Ho Ho Ho!"
  if ((name == login) && (password == santaPassword)){
    return true
  }else{
    return false
  };
};

/* Fix the Bugs (Syntax) - My First Kata
________________________________________
  DESCRIPTION: 
Fix the Bugs (Syntax) - My First Kata
Overview
Hello, this is my first Kata so forgive me if it is of poor quality.

In this Kata you should fix/create a program that returns the following values:

false/False if either a or b (or both) are not numbers
a % b plus b % a if both arguments are numbers
You may assume the following:

If a and b are both numbers, neither of a or b will be 0.
Language-Specific Instructions
Javascript and PHP
In this Kata you should try to fix all the syntax errors found in the code.

Once you think all the bugs are fixed run the code to see if it works. A correct solution should return the values specified in the overview.

Extension: Once you have fixed all the syntax errors present in the code (basic requirement), you may attempt to optimise the code or try a different approach by coding it from scratch.*/

// SOLUTION:
function myFirstKata(a, b){
  if (typeof a === "number" && typeof b === "number"){
    return ((a % b) + (b % a));
  } else {
    return false;
  };
};

/* Sum of positive
___________________
DESCRIPTION: 
You get an array of numbers, return the sum of all of the positives ones.

Example [1,-4,7,12] => 1 + 7 + 12 = 20

Note: if there is nothing to sum, the sum is default to 0. */

// SOLUTION:
function positiveSum(arr){
  let result = 0;
   for (let i = 0; i < arr.length; i++){
    if (arr[i] > 0){
        result += arr[i];
              }
       }
       return result;
}

/* Convert a Number to a String!
___________________
DESCRIPTION: 
We need a function that can transform a number (integer) into a string.

What ways of achieving this do you know?

Examples (input --> output):
123  --> "123"
999  --> "999"
-100 --> "-100"*/

// SOLUTION:
function numberToString(num) {
  return String(num);
}

/* Pirates!! Are the Cannons ready!??
___________________
DESCRIPTION: 
Ahoy Matey!
Welcome to the seven seas.
You are the captain of a pirate ship.
You are in battle against the royal navy.
You have cannons at the ready.... or are they?
Your task is to check if the gunners are loaded and ready, if they are: Fire!
If they aren't ready: Shiver me timbers!
Your gunners for each test case are 2, 3 or 4.
When you check if they are ready their answers are in a dictionary and will either be: aye or nay
Firing with less than all gunners ready is non-optimum (this is not fire at will, this is fire by the captain's orders or walk the plank, dirty sea-dog!)
If all answers are 'aye' then Fire! if one or more are 'nay' then Shiver me timbers!*/

// SOLUTION:
const cannonsReady = (gunners) => {
  return Object.values(gunners).includes('nay') ? 'Shiver me timbers!' : 'Fire!'
 };