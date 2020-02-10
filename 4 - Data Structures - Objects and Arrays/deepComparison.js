/*
 * Deep comparison
 *
 * The == operator compares objects by identity. But sometimes you’d prefer to compare the values of their actual 
 * properties. Write a function deepEqual that takes two values and returns true only if they are the same value 
 * or are objects with the same properties, where the values of the properties are equal when compared with a 
 * recursive call to deepEqual. To find out whether values should be compared directly (use the === operator for that) 
 * or have their properties compared, you can use the typeof operator. If it produces "object" for both values, you 
 * shuld do a deep comparison. But you have to take one silly exception into account: because of a historical 
 * accident, typeof null also produces "object". The Object.keys function will be useful when you need to go over 
 * the properties of objects to compare them.
 *
*/


function deepEqual(first,second) {
  let firstKeys = Object.keys(first);
  let secondKeys = Object.keys(second);
  
  if (firstKeys.length !== secondKeys.length) return false;
  
  for(let i = 0; i < firstKeys.length; i++) {
    if(typeof first[firstKeys[i]] === 'object' && first[firstKeys[i]] != null) {
      if(typeof second[firstKeys[i]] === 'object' && second[firstKeys[i]] != null) {
        deepEqual(first[firstKeys[i]],second[firstKeys[i]])
      } else {
        return false
      }
    } else {
      if (second[firstKeys[i]] !== first[firstKeys[i]]) {
        return false
      }
    }
  }
  // console.log('deepEqual run successful')
  return true;
}


let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {object: 2, here: {is: "an"}}));
// → true