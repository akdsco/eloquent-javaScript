/*
 * Reversing an array
 *
 * Arrays have a reverse method that changes the array by inverting the order in which its elements appear. 
 * For this exercise, write two functions, reverseArray and reverseArrayInPlace. The first, reverseArray, takes 
 * an array as argument and produces a new array that has the same elements in the inverse order. The second, 
 * reverseArrayInPlace, does what the reverse method does: it modifies the array given as argument by reversing 
 * its elements. Neither may use the standard reverse method.
 *
 */

// Functional reverse, copying and not mutating original array

function reverseArray(arr) {
  let arrCopy = [...arr]
  let reversedArr = []
  
  for (let item of arr) {
    reversedArr.push(arrCopy.pop());	
  }
  
  return reversedArr
}

// Here we mutate the array supplied (not recommended)

function reverseArrayInPlace(arr) {
  for (let i = 0; i < Math.floor(arr.length / 2); i++) {
    let item = arr[i]
    arr[i] = arr[arr.length - 1 - i]
    arr[arr.length - 1 - i] = item
  }
}



console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
let arrayValue = [0, 1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1,]