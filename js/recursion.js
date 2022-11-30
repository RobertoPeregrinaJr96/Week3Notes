



console.log("Recursion")

/**
Recursion - the process of invoking a function within itself to create a loop
    - anything done with recursion and be done with iteration and vice-versa
    - recursion is really only done for large data loops while iteration are great for anything else

    - recursion is made up of the base case,recursive step and recursive base
    - base case : where we want our loop to end
    - recursive case : where we invoke the function
    - recursive step : the action were doing to reach our base case
*/

// Plain Recursion
function sumArray(arr) {
  // this is our base case where when the array is empty we will return 0
  if (!arr.length) return 0
  // we are takeing a step to our base case by slicing off the 0 index with each loop
  let recursiveStep = sumArray(arr.slice(1))
  // this is what we will be adding to our base case return value
  let addingNum = arr[0]
  // when the array is not empty then we will return our recursiveStep(our recursive case/ recursive step) with addingNum (what we are adding )
  return addingNum + recursiveStep
}
console.log(sumArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))
/*

*/
// Recursion with a Default parameter
// we can add an extra parameter that will be our container
// sum = 0 <---- we now have something to hold our sum
function sumArray2(arr, sum = 0) {
  // we can check if the array length is empty and if true we return our sum
  if (arr.length === 0) return sum  // <---- base case
  // we add arr.pop() to sum as arr.pop will return the element that it is popping off the array
  sum += arr.pop()  // <---- recursive step
  // we will return our invoked function to continue the loop
  return sumArray2(arr, sum) // <---- recursive case
}

console.log(sumArray2([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))
