/* Flattening (Using reduce and concat)
 *
 * Use the reduce method in combination with the concat method to “flatten” an array of arrays 
 * into a single array that has all the elements of the original arrays.
*/

let arrays = [[1, 2, 3], [4, 5], [6], [7]];

function flatArray(arr) {
  return arr.reduce((flat, toFlatten) => flat.concat(toFlatten)) 
}

console.log(flatArray(arrays));

// -> [1, 2, 3, 4, 5, 6, 7]

// Also found online a solution that included flattening further embedded arrays.
// It uses recursive approach to flatten inner arrays.

function flatten(arr) {
  return arr.reduce(function (flat, toFlatten) {
    return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten);
  }, []);
}