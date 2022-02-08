// What is a function in JS?

//named Function
function myFunction(){
    return 1;
}

//Anonymous Function (No name, use function keyword)
let myFunc = function(){
    return 1;
}
//arrow Function (return value directly)
let myFuncArrow = () => 1

// Arrow function (return vakue in block)
let myFuncArrow2 = () => ({a: 5})
console.log(myFuncArrow2())

function myHigherOrderFunction(parameterFunction){
    return parameterFunction()
}

console.log(myHigherOrderFunction(myFuncArrow2))

function repeat(n, action) {
    for (let i = 0; i < n; i++) {
      action(i);
    }
  }

  repeat(3, console.log)

let arrays = [[1, 2, 3], [4, 5], [6]];
// Your code here.
// → [1, 2, 3, 4, 5, 6]

export function flattening(inputList){
    return inputList.reduce((ae1,ae2)=>ae1.concat(ae2))
}
console.log(flattening(arrays))


export function loop(value, test, update, body){
    while(test(value)){
        body(value)
        value = update(value)
    }
}

loop(3, n => n > 0, n => n - 1, console.log);
/** Write a higher-order function loop that provides something like a for loop statement. It takes a value, a test function, an update function, and a body function. 
 * Each iteration, it first runs the test function on the current loop value and stops if that returns false. Then it calls the body function, giving it the current value. 
 * Finally, it calls the update function to create a new value and starts from the beginning.

 (Links to an external site.)When defining the function, you can use a regular loop to do the actual looping.*/

/** 
 * 3-3. everyLoop(array, test)
 * 3-4. everySome(array, test)
  
Analogous to the some method, arrays also have an every method. This one returns true when the given function returns true for every element in the array. 
In a way, some is a version of the || operator that acts on arrays, and every is like the && operator.

Implement two versions of every (everySome and everyLoop) as a function that takes an array and a predicate function as parameters. 
Write two versions, one using a loop and one using the some method.
(Links to an external site.)*/


function everyLoop(array, test) 
{
    let returnValue = true
  for(let item of array){
    returnValue = returnValue && test(item)
  }
  return returnValue
}

export function everySome(array, test) {
    return !array.some(item => {
        console.log("Applying the test to " + " with result " + test(item))
        if(!test(item)){
            console.log("I found an item that doesn't meet the test!")
        }
        return !test(item)
    })
} 

console.log(everySome([1, 3, 5], n => n < 10));
// → true
console.log(everySome([2, 4, 16], n => n < 10));
// → false
console.log(everyLoop([], n => n < 10));
// → true