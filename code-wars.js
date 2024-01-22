//Basic Training: Add item to an Array

/*DESCRIPTION:
Add the value "codewars" to the websites array.
After your code executes the websites array should == ["codewars"]

The websites array has already been defined for you using the following code:

var websites = [];*/

// SOLUTION:
var websites = [];
websites.push("codewars");

//Removing Elements

/*Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

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
}}
