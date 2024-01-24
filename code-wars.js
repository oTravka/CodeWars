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